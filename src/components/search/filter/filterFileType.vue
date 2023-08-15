<template>
  <!-- Start Widget Wrapper  -->
  <div class='nuron-expo-filter-widget widget-shortby'>
    <div class='inner'>
      <h5 class='widget-title'>File Type</h5>
      <div class='content'>
        <option-tag
            v-for="(value, title) in this.fileTypes"
            type='checkbox'
            name='stockFileType'
            :optiontitle="title"
            :value="value"
            v-model='optionValue'
            @input='changeType'
        ></option-tag>
      </div>
    </div>
  </div>
  <!-- End Widget Wrapper  -->
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import OptionTag from '@/components/search/filter/options/optionTag.vue'

export default {
  components: { OptionTag },
  data() {
    return {
      optionValue: [],
      fileTypes: {
        AI: '1443',
        EPS: '1444',
        JPG: '1445',
        PSD: '1442'
      }
    }
  },
  methods: {
    changeType() {
      let stockFileTypeArr = _.split(this.stockFileType, ',').filter(Number)
      if (stockFileTypeArr.includes(this.optionValue)) {
        const index = stockFileTypeArr.indexOf(this.optionValue)
        stockFileTypeArr.splice(index, 1)
      } else {
        stockFileTypeArr.push(this.optionValue)
      }
      this.setPage(1)
      this.setStockFileType(stockFileTypeArr.toString())
      this.fetchItems()
    },
    ...mapMutations({
      setPage: 'searchItems/setPage',
      setStockFileType: 'searchItems/setStockFileType'
    }),
    ...mapActions({
      fetchItems: 'searchItems/fetchItems'
    })
  },
  computed: {
    ...mapState({
      stockFileType: state => state.searchItems.query.stockFileType
    })
  }
}
</script>
