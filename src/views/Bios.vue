<template>
  <div class="c-bios">
    <Title
      :text="title.text"
      :textType="title.textType"
      :className="title.className"
      :styleModifier="title.style"
      v-if="title"
    />
    <container :flexDirection="content.flexDirection" v-if="content">
      <!-- use slot to reduce unnecessary wrapper elements on render -->
      <slot v-for="(list, i) in content.items">
        <rich-text :type="list.textType" :text="list.text" v-if="list.text"></rich-text>
        <ul
          :class="list.className"
          :style="{
            flexDirection: list.flexDirection,
            justifyContent: list.justifyContent,
            flexWrap: list.flexWrap
          }"
          :key="i"
          v-if="list.items"
        >
          <list-item
            :className="listItem.className"
            :flexDirection="listItem.flexDirection"
            :width="listItemWidth(listItem.width)"
            v-for="(listItem, index) in list.items"
            :key="index"
          >
            <rich-text :type="listItem.items[0].textType" :text="listItem.items[0].text"></rich-text>
            <image-component :src="listItem.items[1].src" :alt="listItem.items[1].alt" />
          </list-item>
        </ul>
      </slot>
    </container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Container from '@/components/Container';
import ImageComponent from '@/components/Image';
import ListItem from '@/components/ListItem';
import RichText from '@/components/RichText';
import Title from '@/components/Title';

export default {
  name: 'Bios',
  components: {
    Container,
    ImageComponent,
    ListItem,
    RichText,
    Title,
  },
  computed: {
    ...mapGetters({
      title: 'biosTitle',
      content: 'biosContent'
    }),
  },
  methods: {
    ...mapActions(['getBios']),
    listItemWidth(listItemWidth) {
      return `${listItemWidth * 100}%`;
    },
  },
}
</script>
