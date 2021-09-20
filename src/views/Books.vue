<template>
  <div class="c-books">
    <Title
      :text="title.text"
      :textType="title.textType"
      :className="title.className"
      :styleModifier="title.style"
      v-if="title"
    />
    <container :flexDirection="content.flexDirection" v-if="content" :class="content.className">
      <div :class="series.className">
        <p v-html="series.text" />
      </div>
      <slot :class="content.className" v-for="(list, i) in content.items">
        <container
          :class="list.className"
          :flexDirection="list.flexDirection"
          :style="{
            justifyContent: list.justifyContent,
            flexWrap: list.flexWrap
          }"
          :key="i"
          v-if="list.items"
        >
          <container :class="book.className" :flexDirection="book.flexDirection" v-for="(book, i) in list.items" :key="i" :style="{ justifyContent: book.justifyContent, alignItems: book.alignItems }">
            <image-component :class="list.items[0].className" :src="book.src" :alt="book.alt" :imageStyle="{ maxHeight: `${book.height}px` }" />
            <p :class="content.className" v-for="(content, i) in book.items" :key="i">{{ content.text }}</p>
          </container>
        </container>
      </slot>
    </container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Container from '@/components/Container';
import ImageComponent from '@/components/Image';
import Title from '@/components/Title';

export default {
  name: 'Books',
  components: {
    Container,
    ImageComponent,
    Title,
  },
  computed: {
    ...mapGetters({
      title: 'booksTitle',
      content: 'booksContent',
      series: 'booksSeries',
    }),
  },
}
</script>

<style lang="scss" scoped>
.book-list {
  margin: 1rem;
  padding: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid;
  }
}

.book-cover {
  padding: 1rem;
}

.book-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.book-summary {
  font-size: 1.2rem;
  text-align: left;
}
</style>
