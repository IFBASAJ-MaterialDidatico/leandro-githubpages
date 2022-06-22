# Using vuetify in Markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

### Show

Always use `v-app` 

<v-app light>
<div class="text-center">
<v-btn class="mx-2" fab dark small color="primary">
<v-icon dark>mdi-minus</v-icon>
</v-btn>
<v-btn class="mx-2" fab dark small color="pink">
<v-icon dark>mdi-heart</v-icon>
</v-btn>
<v-btn class="mx-2" fab dark color="indigo">
<v-icon dark>mdi-plus</v-icon>
</v-btn>
<v-btn class="mx-2" fab dark color="teal">
<v-icon dark>mdi-format-list-bulleted-square</v-icon>
</v-btn>
<v-btn class="mx-2" fab dark large color="cyan">
<v-icon dark>mdi-pencil</v-icon>
</v-btn>
<v-btn class="mx-2" fab dark large color="purple">
<v-icon dark>mdi-android</v-icon>
</v-btn>
</div>
</v-app>