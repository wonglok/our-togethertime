<template>
  <div class="">

    <div class="flex flex-col lg:flex-row">

      <div class="lg:w-1/2 relative lg:order-2 py-24 flex justify-center items-center  bg-gray-200">
        <a target="_blank" href="https://instagram.com/a/r/?effect_id=225770121951774" class="">
          <div class="flex justify-center items-center">
            <img src="~/assets/image/conservation.png" alt="">
          </div>
          <p class="p-3 text-center block">
            Click the above icon to try it out.
          </p>
        </a>

      </div>
      <div class="lg:w-1/2 relative">
        <!-- <ScissorArea class="absolute top-0 left-0 right-0 bottom-0" style="z-index: -1;">
          <div slot="dom" class="full">
          </div>
          <HowScene slot="o3d"></HowScene>
        </ScissorArea> -->

        <div class="px-3 max-w-xl mx-auto  py-24 lg:py-32 xl:py-64">
          <div class="px-3 mb-2 text-3xl md:text-4xl font-bold">
            Conservation of Momentum
          </div>
          <div class="px-3 mt-1 text-gray-600">
            Instagram Filter
          </div>
          <div class="px-3 text-sm mb-3 text-gray-600">
            Wong Lok
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <!-- -->

  </div>
</template>

<script>
// import { Auth } from '../../../APIs/KA'
export default {
  components: {
    ...require('../webgl').default
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
