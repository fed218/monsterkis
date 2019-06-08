<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{'disabled': !pageDatas.has_pre}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="incrementCounter(pageDatas.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pageDatas.total_pages"
          :key="page"
          :class="{'active': pageDatas.current_page == page}"
        >
          <a class="page-link" href="#" @click.prevent="incrementCounter(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pageDatas.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="incrementCounter(pageDatas.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    pageDatas: {
      type: Object,
    },
  },
  methods: {
    incrementCounter(page) {
      this.$emit('increment', page);
    },
  },
};
</script>
