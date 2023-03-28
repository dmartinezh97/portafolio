<template>
    <label class="relative inline-flex items-center mb-5 cursor-pointer">
        <input type="checkbox" v-model="checked" class="sr-only peer" @change="$emit('update:modelValue', checked)">
        <div
            class="w-9 h-5 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#42d392]">
        </div>
        <span class="ml-3 text-xs font-medium text-gray-600 select-none">{{ text }}</span>
    </label>
</template>

<script>
export default {
    props: {
        text: String,
        modelValue: {
            required: true
        }
    },
    name: "Toggle",
    data() {
        return {
            checked: this.modelValue
        }
    },
}
</script>