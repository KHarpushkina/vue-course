<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="not-found-block">
                    <div class="not-found-title">
                        <div>
                            <div>4</div>
                            <div><font-awesome-icon icon="map-signs"></font-awesome-icon></div>
                            <div>4</div>
                        </div>
                        <div>Page Not Found</div>
                    </div>
                    <div class="not-found-text">
                        <div>Looks like you're lost. But don't worry. Let’s find a better place for you to go</div>
                        <div>
                            <router-link :to="{ name: 'articles_main_page' }">
                                <button class="btn btn-outline-dark go-to-homepage-button">Go to homepage</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFoundPage",
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.container {
    margin-top: -84px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .col {
        .not-found-block {
            width: auto;
            padding: 24px 0;
            .not-found-title {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 24px;
                & > div:first-child {
                    display: flex;
                    justify-content: center;
                    font-size: 11rem;
                }
                & > div:nth-child(2) {
                    font-size: 56px;
                    display: flex;
                }
            }
            .not-found-text {
                text-align: center;
                & > div {
                    margin-top: 24px;
                }
            }
        }
    }
}
</style>
