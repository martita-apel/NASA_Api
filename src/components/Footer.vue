<template>
  <v-footer dark padless>
    <v-card flat tile class="grey darken-4 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="30px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text mx-auto pt-0" style="max-width:70%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        numquam temporibus explicabo sequi a ab voluptas praesentium non totam
        distinctio!
      </v-card-text>

      <v-divider class="mx-auto my-2" style="max-width:80%"></v-divider>

      <v-card-text class="white--text my-2">
        <!--         {{ new Date().getFullYear() }} —-->
        <img id="logo" src="../assets/logo.png" alt="logo" />
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      icons: ["mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style>
#logo {
  max-width: 70px;
}
</style>
