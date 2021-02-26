<template>
  <el-container class="container" >
    <el-row class="detail">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-image
          :src="character.image"
          fit="fit"></el-image>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h1 class="titulo">{{ character.name }}</h1>
        <el-container class="info" v-if="character">
          <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <el-card class="box-card">
                <el-container direction="vertical" v-if="character.status == 'Alive'">
                <h2 class="card_titulo"> Estado</h2>
                <el-row type="flex" justify="center" align="middle">
                  <el-image class="estado_alive" src="http://www.clker.com/cliparts/r/M/L/o/R/i/green-dot.svg" fit="contain"/>
                  <h3>{{ character.status }}</h3>
                </el-row>
              </el-container>
              <el-container direction="vertical" v-if="character.status == 'unknown'">
                <h2 class="card_titulo"> Estado</h2>
                <el-row type="flex" justify="center" align="middle">
                  <el-image class="estado_unknown" src="https://cdn2.iconfinder.com/data/icons/weather-bodeline-1/512/Weather_Bodeline_Unknown-512.png" fit="contain"/>
                  <h3>{{ character.status }}</h3>
                </el-row>
              </el-container>
              <el-container direction="vertical" v-if="character.status == 'Dead'">
                <h2 class="card_titulo"> Estado</h2>
                <el-row type="flex" justify="center" align="middle">
                  <el-image class="estado_dead" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Location_dot_red.svg/1024px-Location_dot_red.svg.png" fit="contain"/>
                  <h3>{{ character.status }}</h3>
                </el-row>
              </el-container>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <el-card class="box-card">
                <div >
                  <h2 class="card_titulo">Especie</h2>
                  <h3>{{ character.species }}</h3>
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
              <el-card class="box-card">
                <div >
                  <h2 class="card_titulo">Género</h2>
                  <h3>{{ character.gender }}</h3>
                </div>
              </el-card>
            </el-col>
          </el-row>

          <el-row type="flex" justify="space-around">
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-card class="box-card">
                <div >
                  <h2 class="card_titulo">Origen</h2>
                  <h3>{{ character.origin.name }}</h3>
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-card class="box-card">
                <div >
                  <h2 class="card_titulo">Ubicación</h2>
                  <h3>{{ character.location.name }}</h3>
                </div>
              </el-card>
            </el-col>
          </el-row>

          <el-row class="episodios" type="flex" justify="space-around" align="middle">
              <div >
                  <h4>Lista de Episodios donde aparece el personaje:</h4>
              </div>
            <el-dropdown split-button type="warning" @click="handleClick">
              Episodios
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(episode,index) in character.episode" :key="index" >
                  Episodio {{ episode.substr(40,41) }}
                </el-dropdown-item>             
              </el-dropdown-menu>
            </el-dropdown>
             
          </el-row>

          <el-row class="botonVolver" type="flex" justify="center" align="middle">
            <el-button class="button" @click="volver" type="primary" round>Volver</el-button>
          </el-row>

        </el-container>
               
          </el-col>

  </el-row>
  </el-container>
</template>

<script>

export default {
  props:[
    'id'
  ],
  computed:{
    character(){
      return this.$store.getters.character(parseInt(this.id))
    }
  },
  methods:{
        volver(){
            this.$router.push({ name: 'Home'})
        },
         handleClick() {
        alert('button click');
        }
    }
}
</script>

<style scoped lang="scss">

.container {
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.detail{
  background-color: #3C3E44;
  border-radius: 20px;
  width: 90%;

  .el-image {
    width: 100%;
    display: flex;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .titulo{
    font-size: 2.5rem;
    color: #FF9800;
  }

  .info{
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    .box-card{
      margin: 8% 10% 7% 10%;
      border-radius: 17px;
      border-color: #128598;
      border-width: 3px;
      background-color: transparent;
      color: white;

      .card_titulo{
        color: #F2ED6F;
      }

        .estado_alive{
          width: 10%;
          height: 10%;
        }
        .estado_dead{
          margin: 4%;
          width: 5%;
          height: 5%;
        }
        .estado_unknown{
          margin: 2%;
          width: 10%;
          height: 10%;
        }
    }
  }

  .episodios{
    flex-direction: row;
  }

  .botonVolver{
      margin-top: 3%;

      .button{
        font-size: 1.5rem;
      }
  }
  
}





/* .detail {
  display: flex;
  width: 90%;
  height: 70%;
  border-radius: 20px;
  justify-content: center;
  background-color: #3C3E44;
  .el-image{
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    .titulo{
    font-size: 3rem;
    color: #FF9800;
    }
    .estado_alive{
      width: 10%;
      height: 10%;
    }
    .estado_dead{
      width: 5%;
      height: 5%;
    }
    .estado_unknown{
      width: 10%;
      height: 10%;
    }
    .boton{
      flex-direction: column;
      justify-content: center;
    }
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
} */

</style>

