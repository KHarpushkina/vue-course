<template>
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container">
            <div>
                <a class="navbar-brand" href="#">Articles</a>
            </div>
            <div>
                <ul class="navbar-nav nav-list-links">
                    <li class="nav-item">
                        <router-link :to="{name: 'articles_main_page'}">
                            <span class="nav-link active" aria-current="page">
                                Home
                            </span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'create_article'}">
                            <span class="nav-link" aria-current="page">
                                Create article
                            </span>
                        </router-link>
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
            </div>
        </div>
        <div class="container right-align-items">
            <div>
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
            </div>
            <div class="nav-buttons">
                <button class="btn btn-light">Search</button>
                <button class="btn btn-outline-info">Sign In</button>
                <button class="btn btn-outline-info">Sign Up</button>
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

<style scoped lang="scss" rel="stylesheet/scss">
.navbar {
    display: flex;
    flex-direction: row;
    .container {
        justify-content: start;
        margin-right: 0;
        margin-left: 0;
        width: 50%;
        div {
            display: inline;
        }
        .navbar-nav {
            flex-direction: row;
            li {
                margin: 0 10px;
                a {
                    text-decoration: none;
                }
            }
        }
        .form-control {
            width: auto;
        }
    }
    .right-align-items {
        justify-content: flex-end;
        .nav-buttons button {
            margin: 0 5px;
        }
    }
}
</style>
