<template>
	<a class="button" :href="resource" download>
		<svg-icon type="mdi" :path="icon" style="display: inline-block; vertical-align: middle" />
		{{ label }}
	</a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
// @ts-ignore
import { mdiDownload } from "@mdi/js";

defineProps({
	resource: {
		type: String,
		default: "",
	},
	label: {
		type: String,
		default: "Download",
	},
	icon: {
		type: String,
		default: mdiDownload,
	},
});
</script>
