<template>
  <div>
    <!-- ***** Welcome Area Start ***** -->
    <welcome-area-start
      :text-button="textButton"
      :link="'#founders'"
      :paths-list="pathsList"
      :bigImage="'/banners/banner-robot.png'"
    >
      <template #title> About the company: <em>Invation</em> </template>
      <template #overview>
        Our company was born in <b>2001</b> at the early stages of the
        <i>new millennium.</i> <br />
        with a special look at the future, <b>Invation</b> immediately started
        to imposes itself as an <i>innovative</i> company. Inside the company
        there are <i>three pillars:</i> Innovation, Invention and Teamwork.
      </template>
    </welcome-area-start>
    <!-- ***** Founder Area Start ***** -->
    <section id="founders">
      <div class="left-image-decor"></div>
      <base-three-object-container
        :title="'THE FOUNDERS'"
        :objects="founders"
        :big-image="foundersImage"
        :is-object-list="false"
      >
        Thanks to the <i>ambition</i> and the work of our founder, Invation
        rockted in the market at full speed! Federica, Lorenzo and Alessandro
        are three students from <b>Politecnico di Milano</b>, currently pursuing
        the "once in a life time" dream of running a company together with
        precious <i>friends</i>.
      </base-three-object-container>
    </section>
    <!-- ***** HeadQuarter Area Start ***** -->
    <section id="headquarter">
      <div class="container">
        <div class="row">
          <div class="headquarter-panel">
            <img
              src="https://imgur.com/3a8qtFQ.png"
              alt="Invation Headquarter"
              width="432"
              height="583"
            />
            <div class="headquarter-info">
              <h2>INVATION HEADQUARTER</h2>
              <p>
                Our brand new headquarter is placed in <i>Via Dante</i>, at the
                center of <b>Milan</b>, next to the Castello Sforzesco. Its
                modern and futuristic design is unique and its part of our
                <b>brand</b>. Following the <i>red dot</i>, like a lighthouse in
                the dark, you will always find the way to innovation and new
                inventions.
              </p>
              <br />
              <h3>How to reach us</h3>
              <p>
                You can easily reach us using the green line of the underground
                getting off at the stop of Cairoli. From there it is just 3
                minutes walking. <br />
                <i>Don't forget, just follow the red dot!</i>
              </p>
              <img
                v-if="!mapRequest"
                src="https://imgur.com/JJohAgw.png"
                alt="Map to reach the headquarter"
                width="370"
                height="244"
                @mouseover="mapRequest = true"
              />
              <div
                v-else
                class="map-opening-request"
                @mouseout="mapRequest = false"
              >
                <button @click="mapOpening = true">Open the Map</button>
              </div>
            </div>
          </div>
          <div v-if="mapOpening" class="mapBig" @click="mapOpening = false">
            <button @mouseout="mapOpening = false">X</button>
            <img
              src="https://imgur.com/JJohAgw.png"
              alt="Map to reach the headquarter - Big"
              width="1140"
              height="750"
              @mouseover="mapOpening = true"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseThreeObjectContainer from '~/components/baseElements/BaseThreeObjectContainer.vue'
import WelcomeAreaStart from '~/components/baseElements/WelcomeAreaStart.vue'

export default {
  components: {
    WelcomeAreaStart,
    BaseThreeObjectContainer,
  },
  data() {
    return {
      textButton: 'DISCOVER MORE',
      mapOpening: false,
      mapRequest: false,
      pathsList: [
        {
          path: this.$route.path,
          pathName: 'About',
        },
      ],
      founders: [
        {
          name: 'Federica Bucchieri',
          overview:
            'testo di prova testo di prova testo di prova testo di prova',
          thumbnail: 'https://imgur.com/zE45k0i.png',
        },
        {
          name: 'Lorenzo Cocchia',
          overview:
            'testo di prova testo di prova testo di prova testo di prova',
          thumbnail: 'https://imgur.com/I85XkuB.png',
        },
        {
          name: 'Alessandro Corsini',
          overview:
            'testo di prova testo di prova testo di prova testo di prova',
          thumbnail: 'https://imgur.com/X1ICPDh.png',
        },
      ],
      foundersImage: 'https://imgur.com/GD02BFB.png',
    }
  },
  head() {
    return {
      title: 'Invation - About',
      meta: [
        {
          name: 'description',
          content:
            'General overwiew of the company, its founders and how to reach the headquarter',
        },
        {
          hid: 'About',
          name: 'About',
          content: 'About Invation',
        },
      ],
    }
  },
}
</script>

<style>
@media only screen and (max-width: 1024px) {
  #founders {
    margin: 200px 0 100px 0;
  }
}

@media only screen and (max-width: 810px) {
  .headquarter-panel {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .headquarter-panel img {
    width: 100%;
  }

  .headquarter-info {
    width: 100%;
    margin-bottom: 10px;
  }

  .headquarter-info img {
    width: 100%;
    height: auto;
  }

  .map-opening-request {
    width: 100%;
    height: 182px;
  }

  .mapBig {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    top: -750px;
  }
}

@media only screen and (min-width: 810px) {
  .headquarter-panel {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .headquarter-panel img {
    width: 40%;
    height: auto;
  }

  .headquarter-info {
    width: 60%;
    padding: 20px 0px 00px 30px;
  }

  .headquarter-info img {
    width: 60%;
  }

  .map-opening-request {
    width: 60%;
    height: 247px;
  }

  .mapBig {
    top: -950px;
  }
}

.headquarter-panel {
  margin-top: 25%;
  margin-bottom: 25%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  flex-wrap: wrap;
}

.headquarter-panel img {
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: auto;
}

.headquarter-info {
  text-align: justify;
}

.headquarter-info h3 {
  text-align: left;
  font-size: 18px;
  margin-bottom: 0;
}

.headquarter-info img {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: block;
}

.map-opening-request {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background-image: url(https://imgur.com/JJohAgw.png);
  background-size: cover;
  opacity: 0.7;
  display: block;
  border-radius: 10px;
  text-align: center;
}

.map-opening-request button {
  color: black;
  background-color: whitesmoke;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 25px;
  padding: 15px 25px;
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50%;
}

.mapBig {
  z-index: 1;
  position: relative;
}

.mapBig img {
  width: 100%;
  height: auto;
}
</style>
