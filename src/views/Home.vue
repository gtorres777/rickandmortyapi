<template>
  <el-container class="container">

    <el-image
      src="https://mazmorrazero.es/wp-content/uploads/2020/05/kisspng-rick-sanchez-morty-smith-rick-and-morty-pocket-li-justin-roiland-5b1c00b82d0872.7637284215285618481845.png"
    />

    <el-header><h1>Personajes de Rick and Morty </h1></el-header>    

    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="12">
          <el-input autofocus="true" suffix-icon="el-icon-search" class="searcher" placeholder=" Buscador de Personajes" v-model="search"></el-input>
      </el-col>
    </el-row>

    <el-row class="list">
          <Card 
      v-for="(character, index) in filteredCharacter" :key="index"
      :charactersList="character"/>
    </el-row> 
    
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from '../components/Card.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      search:''
    }
  },
  computed:{
    ...mapGetters(["charactersList"]),
    filteredCharacter: function(){
      return this.charactersList.filter((character) => {
        let character_lowercase = character.name.toLowerCase()
        return character_lowercase.match(this.search)
      })
    }
  },
  created() {
    this.fetchCharacters()
  },
  methods: {
    viewCharacter(characterId){
      this.$router.push({ name: 'character', params: { id: characterId }})
    },
    ...mapActions(["fetchCharacters"])
  },
};
</script>

<style scoped lang="scss">

.el-row {
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  }
.list{
  justify-content: center;
}
.searcher{
  font-size: 1.5rem;  
}
</style>
