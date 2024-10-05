<script setup lang="ts">
const toExternalLink = (link: string) => {
  window.open(link, "_blank");
};
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="contents text-center">
      <v-img
        src="/profile-icon.png"
        alt="profile-image"
        height="100"
        width="100"
        class="rounded-circle mx-auto"
      />
      <p class="display-1 font-weight-bold">Kenta Tanizawa</p>
      <v-card class="pa-12 d-flex flex-column align-center mt-4">
        <v-btn
          color="#1E88E5"
          width="120"
          nuxt
          class="text-capitalize"
          @click="toExternalLink('https://github.com/ktanizaw')"
        >
          GitHub
        </v-btn>
        <v-btn
          color="#1E88E5"
          width="120"
          nuxt
          class="text-capitalize mt-4"
          @click="
            toExternalLink(
              'https://www.linkedin.com/in/kenta-tanizawa-775b5226b/'
            )
          "
        >
          LinkedIn
        </v-btn>
        <v-btn
          color="#1E88E5"
          width="120"
          nuxt
          class="text-capitalize mt-4"
          @click="toExternalLink('https://x.com/kents_7')"
        >
          X
        </v-btn>
        <v-btn
          color="#1E88E5"
          width="120"
          nuxt
          class="text-capitalize mt-4"
          @click="toExternalLink('https://qiita.com/kents1002')"
        >
          Qiita
        </v-btn>
        <v-btn
          color="#1E88E5"
          width="120"
          nuxt
          class="text-capitalize mt-4"
          @click="toExternalLink('https://medium.com/@kents1002')"
        >
          Medium
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.contents {
  padding-top: 30px;
}
.button-text {
  text-transform: none; /* 大文字変換を無効化 */
}
</style>
