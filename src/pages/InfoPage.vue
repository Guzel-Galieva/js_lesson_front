<template>
  <div class="info-page">
    <InfoCard/>
    <FormCard/>
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import FormCard from '@/components/FormCard.vue'
export default {
  name: "InfoPage",
  props: {
    msg: String,
  },
  components: {
    InfoCard,
    FormCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>