<template>
  <div>
    <label for="">{{fieldLabel}}</label>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: [
    'fieldLabel'
  ]
}
</script>
