<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Main Page</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link1</b-nav-item>
          <b-nav-item href="#">Link2</b-nav-item>
          <b-nav-item href="#">Link3</b-nav-item>
          <b-nav-item href="#">Link4</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-input-group size="md" class="mb-2">
              <b-form-input
                placeholder="Search articles"
              ></b-form-input>
              <b-input-group-append is-text variant="info">
                <Search></Search>
              </b-input-group-append>
            </b-input-group>
          </b-nav-item>

          <b-nav-item>
            <b-button variant="outline-light">Sign In</b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light">Sign Up</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "ArticlesList",
  data() {
    return {
    };
  },

  methods: {
  },
};
</script>

<style scoped></style>
