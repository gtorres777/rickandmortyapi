<template>
    
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img :src="charactersList.image" class="image">
        <div style="padding: 14px;">
            <span class="titulo">{{ charactersList.name}}</span>
            <div class="bottom clearfix">
            <el-button @click="viewCharacter(charactersList.id)" type="success" round class="button">Ver más</el-button>
            </div>
        </div>
        </el-card>
    </el-col>

</template>

<script>
export default {
    name: "Card",
    props: ['charactersList'],
    methods:{
        viewCharacter(characterId){
            this.$router.push({ name: 'character', params: { id: characterId }})
        },
    }
}
</script>

<style scoped lang="scss">
.el-card{
    background-color:#3C3E44;
    margin: 10%;
    border-width: 0;
    border-radius: 20px;
    .titulo{
        color: white;
    }
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: center;
}
.image {
  width: 100%;
  display: block;
}
</style>