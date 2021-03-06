<template lang="pug">
  v-form(ref='form')
    v-card(flat)
      v-card-text
        span(v-html='$t("recognition.wit.headline")')
        v-text-field(v-model='key'
        prepend-icon='vpn_key'
        :label='$t("recognition.wit.key")'
        persistent-hint
        :hint='$t("recognition.keyHint")'
        :loading='loading'
        :disabled='loading')
        v-file-input(:disabled='!key || loading'
        show-size
        :label='$t("recognition.file")'
        persistent-hint
        v-model='file'
        :hint='$t("recognition.fileHint")'
        :loading='loading'
        :rules='rules')
      v-card-actions
        v-progress-linear(v-if='loading'
        :value='progress'
        height='25'
        stream
        color='blue lighten-3'
        :indeterminate='recognizing').mx-3 {{status}}
        v-spacer
        v-btn(:disabled='!key || !file || loading || !valid'
        large
        color='primary'
        :loading='loading'
        @click='recognize') {{$t('recognition.recognize')}}
    div(v-if='result')
      v-divider
      v-card(flat)
        v-card-text
          .title {{$t('result')}}
          blockquote.blockquote {{result}}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import * as api from "../utils/api";
import * as store from "../plugins/store";
import { i18n } from "../plugins/i18n";

@Component
export default class Wit extends Vue {
  key = "";
  file = null;

  rules = [
    (value: any) => !value || value.size < 200000000 || i18n.t("errors.size")
  ];

  loading = false;
  recognizing = false;
  progress = 0;

  status = "";

  result = "";

  valid = false;

  @Watch("file")
  fileChanged() {
    this.valid = (this.$refs.form as any).validate();
  }

  async recognize() {
    if (!this.key.trim() || !this.file) {
      return;
    }
    this.loading = true;
    this.progress = 0;
    this.status = i18n.t("uploading") as string;
    try {
      const response = await api.recognize(
        "wit",
        this.key,
        this.file!,
        progress => {
          this.progress = progress;
          this.status = `${i18n.t("uploading")} (${progress}%)`;
          if (this.progress === 100) {
            this.recognizing = true;
            this.status = i18n.t("recognizing") as string;
          }
        }
      );
      this.result = response.data.text || i18n.t("noText");
    } catch (err) {
      store.setSnackbar({
        message: err.message,
        active: true,
        color: "error"
      });
    } finally {
      this.loading = false;
      this.recognizing = false;
    }
  }
}
</script>