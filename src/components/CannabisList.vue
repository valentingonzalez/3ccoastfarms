<template>
    <div class="cannabis-list">
        <carousel class="cannabis-carousel" :perPage="1" :paginationEnabled="false" :navigationEnabled="true" :loop="true">
            <slide class="cannabis-item" v-for="c in cannabisList" :key="c.id">
                <div class="cannabis-info text-center">
                    <div class="cannabis-category">
                        {{ c.category }}
                    </div>
                    <h4 class="cannabis-name">
                        {{ c.title }}
                    </h4>
                </div>
                <div class="cannabis-image" :style="`background-image:url(${parseImage(c.image)})`"></div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import Repository from '../repositories/Repository';
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'CannabisList',
    components: {
        Carousel,
        Slide,
    },
    props: {
        category: String
    },
    data() {
        return {
            cannabisList: []
        }
    },
    mounted() {
        this.getCannabis(this.category)
    },
    methods: {
        getCannabis() {
            Repository.get('categories').then(response => {
                this.cannabisList = response.data[this.category];
                console.log(this.cannabisList)
            });
        },
        parseImage(path) {
            return require('@/'+path);
        }
    }
}
</script>

<style scoped>
    .cannabis-list,
    .cannabis-item {
        width: 100%;
    }
    .cannabis-item {
        height: 630px;
    }
    .cannabis-list:first-child {
        margin-right: 2px;
    }
    .cannabis-list:last-child {
        margin-left: 2px;
    }
    .cannabis-info {
        line-height: 20px;
        position: absolute;
        bottom: 150px;
        width: 100%;
        /**/
        height: 73px;
        background: #242424;
        border-top: 1px solid #2e2e2e;
        border-bottom: 1px solid #2e2e2e;
        padding: 12px 0;
    }
    .cannabis-category {
        font-weight: bold;
        letter-spacing: 1.2px;
        color: #2bb869;
        font-size: 17px;
        text-transform: uppercase;
    }
    .cannabis-image {
        height: 100%;
        width: 100%;
        background-size: contain;
        background-position: 50% 50%;
        background-blend-mode: lighten;
        background-color: #242424;
    }
</style>