<template>
    <div class="cannabis-list">
        <div v-for="c in cannabis" v-bind="{c}" :key="c.id">
            {{ c.name }}
        </div>
    </div>
</template>

<script>
import Repository from '../repositories/Repository';

export default {
    name: 'CannabisList',
    data: () => {
        return {
            cannabis: [],
        }
    },
    mounted() {
        Repository.get('cannabis')
        .then( data => console.log(data) )
    }
}
</script>
