<template>
  <FormKit
    type="text"
    label="Section-key class props"
    help="Look, Ma! Tailwind styles"
    outer-class="mb-5"
    label-class="block mb-1 font-bold text-sm"
    inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
    input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
    help-class="text-xs text-gray-500"
  />
</template>

<script lang="ts" setup>
// import { computed } from 'vue';

// const props = withDefaults(defineProps<{
//   label: string,
//   primary?: boolean,
//   secondary?: boolean,
//   success?: boolean,
//   danger?: boolean,
//   backgroundColor?: string,
//   textColor?: string,
//   outline?: boolean,
//   size?: 'small' | 'medium' | 'large',
// }>(), {
//   label: 'Save',
//   primary: false,
//   secondary: false,
//   color: 'light',
//   outline: false,
//   size: 'medium',
// });

// const emit = defineEmits<{
//   (e: 'click', id: number): void;
// }>();

// const buttonBackgroundColor = computed(() => {
//   if (props.primary) return 'bg-primary-500 hover:bg-orange-600 text-white';
//   if (props.secondary) return 'bg-primary-200 hover:bg-primary-300 text-primary-900';
//   if (props.success) return 'bg-success-500 hover:bg-success-600 text-white';
//   if (props.danger) return 'bg-danger-500 hover:bg-danger-600 text-white';
//   if (props.backgroundColor) return props.outline
//     ? `bg-transparent border border-${props.backgroundColor} hover:bg-${props.backgroundColor}`
//     : `bg-${props.backgroundColor} hover:bg-stone-300`;
//   return 'bg-gray-300 hover:bg-gray-400 text-gray-800';
// });

// const buttonTextColor = computed(() => {
//   return props.textColor ? `text-${props.textColor}`: ''
// })

// const buttonSize = computed(() => {
//   if (props.size === 'large') return 'py-3 px-5';
//   if (props.size === 'small') return 'py-1 px-3';
//   return 'py-2 px-4';
// })

// const onClick = () => {
//   emit("click", 1)
// };

</script>