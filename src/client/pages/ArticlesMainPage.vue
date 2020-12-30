<template>
    <div class="container">
        <button @click="addArticle">add article</button>
        <div
            v-for="article in articles"
            :key="`${article.name}`"
            :value="`${article.name}`"
            class="row card"
        >
            <div class="col">
                <article-preview :article="article"></article-preview>
            </div>
        </div>
    </div>
</template>

<script>
const DATA = require("../../database.json");
import ArticlePreview from "../components/articles/ArticlePreview.vue";

export default {
    name: "ArticlesMainPage",
    components: {
        ArticlePreview,
    },
    props: ["id"],
    data() {
        return {
            articles: [],
        };
    },
    methods: {
        cutArticleContent(content) {
            let result = content.substring(0, 1000);
            result = result.substring(0, result.lastIndexOf(" "));
            return result + "...";
        },

        addArticle: async function() {
            await this.$store.dispatch("articles/addArticle", {
                article: {
                    name: "10 Things Most People Learn Too Late In Life",
                    content:
                        "Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore. Good times and bad times. Happy times and sad times. But always, life is a movement forward. No matter where you are on the journey, in some way, you are continuing on — and that’s what makes it so magnificent. One day, you’re questioning what on earth will ever make you feel happy and fulfilled. And the next, you’re perfectly in flow, writing the most important book of your entire career. What nobody ever tells you, though, when you are a wide-eyed child, are all the little things that come along with “growing up.” 1. Most people are scared of using their imagination. They’ve disconnected with their inner child. They don’t feel they are “creative.” They like things “just the way they are.” 2. Your dream doesn’t really matter to anyone else. Some people might take interest. Some may support you in your quest. But at the end of the day, nobody cares, or will ever care about your dream as much as you. 3. Friends are relative to where you are in your life. Most friends only stay for a period of time — usually in reference to your current interest. But when you move on, or your priorities change, so too do the majority of your friends. 4. Your potential increases with age. As people get older, they tend to think that they can do less and less — when in reality, they should be able to do more and more, because they have had time to soak up more knowledge. Being great at something is a daily habit. You aren’t just “born” that way. 5. Spontaneity is the sister of creativity. If all you do is follow the exact same routine every day, you will never leave yourself open to moments of sudden discovery. Do you remember how spontaneous you were as a child? Anything could happen, at any moment! 6. You forget the value of “touch” later on. When was the last time you played in the rain? When was the last time you sat on a sidewalk and looked closely at the cracks, the rocks, the dirt, the one weed growing between the concrete and the grass nearby. Do that again. You will feel so connected to the playfulness of life. 7. Most people don’t do what they love. It’s true. The “masses” are not the ones who live the lives they dreamed of living. And the reason is because they didn’t fight hard enough. They didn’t make it happen for themselves. And the older you get, and the more you look around, the easier it becomes to believe that you’ll end up the same. Don’t fall for the trap. 8. Many stop reading after college. Ask anyone you know the last good book they read, and I’ll bet most of them respond with, “Wow, I haven’t read a book in a long time.” 9. People talk more than they listen. There is nothing more ridiculous to me than hearing two people talk “at” each other, neither one listening, but waiting for the other person to stop talking so they can start up again. 10. Creativity takes practice. It’s funny how much we as a society praise and value creativity, and yet seem to do as much as we can to prohibit and control creative expression unless it is in some way profitable. If you want to keep your creative muscle pumped and active, you have to practice it on your own.",
                    last_updated: new Date(),
                    category: "Lifestyle",
                },
            });
        },
    },
    mounted() {
        this.articles = DATA.articles;
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.row {
    margin-bottom: 10px;
    padding: 1rem;
}
</style>
