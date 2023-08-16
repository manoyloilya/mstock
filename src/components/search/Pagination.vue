<template>
  <!-- Start Pagination  -->
  <nav class='pagination-wrapper' aria-label='Page navigation example' v-if='totalPages' :key='page'>
    <ul class='pagination single-column-blog'>
      <li v-if='page !== 1' class='page-item'>
        <a class='page-link' href='#' @click='changePage(page - 1)'>Previous</a>
      </li>

      <li v-for='pageNumber in totalPages' :key='pageNumber' class='page-item'>
        <a
            v-if='
						page == pageNumber ||
						page == pageNumber - 1 ||
						page == pageNumber + 1 ||
						page == pageNumber - 2 ||
						page == pageNumber + 2 ||
						page == pageNumber - 3 ||
						page == pageNumber + 3 ||
						1 == pageNumber ||
						totalPages == pageNumber
					'
            class='page-link'
            @click='changePage(pageNumber)'
            href='#'
            :class='{
						active: parseInt(page) === pageNumber
					}'
        >
          {{ page == pageNumber - 3 || page == pageNumber + 3 ? '...' : pageNumber }}
        </a>
      </li>
      <li v-if='page !== totalPages' class='page-item'>
        <a class='page-link' href='#' @click='changePage(page + 1)'>Next</a>
      </li>
    </ul>
  </nav>
  <!-- End Pagination  -->
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
    changePage(pageNumber) {
      this.$router.push({
        query: { ...this.$route.query, page: pageNumber }
      })
      this.setPage(pageNumber)
      this.fetchItems()
    },
    ...mapMutations({
      setPage: 'searchItems/setPage',
      setQuery: 'searchItems/setQuery'
    }),
    ...mapActions({
      fetchItems: 'searchItems/fetchItems'
    })
  },

  computed: {
    ...mapState({
      items: state => state.searchItems.items,
      page: state => state.searchItems.query.page,
      totalPages: state => state.searchItems.totalPages,
      query: state => state.searchItems.query,
      isItemsLoading: state => state.searchItems.isItemsLoading
    })
  }
}
</script>
