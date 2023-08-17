<template>
  <!-- Start Pagination  -->
  <nav class='pagination-wrapper' aria-label='Page navigation example' v-if='totalPages' :key='page'>
    <ul class='pagination single-column-blog'>
      <li v-if='page !== 1' class='page-item'>
        <a class='page-link' href='#' @click='changePage(page - 1)'>Previous</a>
      </li>

      <li v-for='pageNumber in totalPages' :key='pageNumber' class='page-item'>
        <a
            v-if='checkPage'
            class='page-link'
            @click.prevent='changePage(pageNumber)'
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
export default {
  data() {
    return {
      pageNumber: 0,
    }
  },
  props: {
    page: [String, Number],
    totalPages: [String, Number]
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('page-updated', pageNumber)
    },
    checkPage() {
      if (
          page == pageNumber ||
          page == pageNumber - 1 ||
          page == pageNumber + 1 ||
          page == pageNumber - 2 ||
          page == pageNumber + 2 ||
          page == pageNumber - 3 ||
          page == pageNumber + 3 ||
          1 == pageNumber ||
          totalPages == pageNumber
      ) {
        return true
      }
    }
  },
}
</script>
