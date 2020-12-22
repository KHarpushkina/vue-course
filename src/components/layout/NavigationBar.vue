<template>
    <nav class="navbar fixed-top navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Articles</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 4</a>
            </li>
          </ul>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
          <button class="btn nav-item">Sign In</button>
          <button class="btn nav-item">Sign Up</button>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "ArticlesList",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped></style>
