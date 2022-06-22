---
sidebar: false
---

# Using vuetify stepper in Markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

### Show

Always use `v-app` 

<v-app light>
<v-stepper v-model="e6" vertical>
<v-stepper-step :complete="e6 > 1" step="1">Select an app<small>Summarize if needed</small></v-stepper-step>
<v-stepper-content step="1">
<v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
<v-btn color="primary" @click="e6 = 2">Continue</v-btn>
</v-stepper-content>
<v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>
<v-stepper-content step="2">
<v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
<v-btn color="primary" @click="e6 = 3">Continue</v-btn>
</v-stepper-content>
<v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>
<v-stepper-content step="3">
<v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
<v-btn color="primary" @click="e6 = 4">Continue</v-btn>
</v-stepper-content>
<v-stepper-step step="4">View setup instructions</v-stepper-step>
<v-stepper-content step="4">
<v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
<v-btn color="primary" @click="e6 = 1">Continue</v-btn>
</v-stepper-content>
</v-stepper>
</v-app>

<script>
  export default {
    data () {
      return {
        e6: 1,
      }
    },
  }
</script>