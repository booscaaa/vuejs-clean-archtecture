<template>
    <v-app>
        <v-btn @click="controller.clicouBtn()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { todoController } from "../../../di/di"
export default Vue.extend({
    data: (context: any) => ({
        controller: todoController(context)
    })
})
</script>