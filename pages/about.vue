<!--  About Page -->
<template>
  <div>
    <!-- Orientation info component -->
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <!-- Page introduction -->
    <welcome-area-start
      text-button="DISCOVER OUR FOUNDERS"
      :link="'#founders'"
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
    <!-- Founder area - description and photo -->
    <section id="founders">
      <!-- Decorative image -->
      <div class="left-image-decor"></div>
      <!-- Three founders description container -->
      <three-object-container
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
      </three-object-container>
    </section>
    <!--  HeadQuarter Area Start  -->
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
              <!-- Map image -->
              <img
                v-if="!mapRequest"
                src="https://imgur.com/JJohAgw.png"
                alt="Map to reach the headquarter"
                width="370"
                height="244"
                @mouseover="mapRequest = true"
              />
              <!-- Map opening button container -->
              <div
                v-else
                class="map-opening-request"
                @mouseout="mapRequest = false"
              >
                <button @click="mapOpening = true">Open the Map</button>
              </div>
            </div>
          </div>
          <!-- Big map if opened -->
          <div v-if="mapOpening" class="mapBig" @click="mapOpening = false">
            <button class="close-map" @mouseout="mapOpening = false">X</button>
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
import Breadcrump from "~/components/baseElements/Breadcrump.vue";
import ThreeObjectContainer from "~/components/baseElements/ThreeObjectContainer.vue";
import WelcomeAreaStart from "~/components/baseElements/WelcomeAreaStart.vue";

export default {
  components: {
    Breadcrump,
    WelcomeAreaStart,
    ThreeObjectContainer,
  },
  data() {
    return {
      // Flag indicating if the map is open or not
      mapOpening: false,
      // Flag used to display the request to the user asking if she wants to open the map
      mapRequest: false,
      // Information used for the breadcrump functionalities
      pathsList: [
        {
          path: this.$route.path,
          pathName: "About",
        },
      ],
      // Object containing the information related to the founders of the site
      founders: [
        {
          name: "Federica Bucchieri",
          overview:
            "Born in Palermo, Federica gratuated in Computer Science. She is passionate about programming, graphic design and videogames",
          thumbnail: "https://imgur.com/zE45k0i.png",
        },
        {
          name: "Lorenzo Cocchia",
          overview:
            "Born in Siena, Lorenzo gratuated in Computer Science. He is passionate about documentations, Virtual Reality and backend development",
          thumbnail: "https://imgur.com/I85XkuB.png",
        },
        {
          name: "Alessandro Corsini",
          overview:
            "Born in Caprarica di Lecce, Alessandro gratuated in Computer Science. He is passionate about algorithms, videogames and storytelling",
          thumbnail: "https://imgur.com/cjvDnYD.png",
        },
      ],
      // Object containing an image related to the founders
      foundersImage: "https://imgur.com/GD02BFB.png",
    };
  },
  head() {
    return {
      title: "Invation - About",
      meta: [
        {
          name: "description",
          content:
            "General overwiew of the company, its founders and how to reach the headquarter",
        },
        {
          hid: "About",
          name: "About",
          content: "About Invation",
        },
      ],
    };
  },
};
</script>

<style>
#founders {
  padding-top: 150px;
  margin-top: -150px;
}

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
    top: -350px;
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

.close-map {
  cursor: pointer;
  font-size: 14px;
  border-radius: 25px;
  padding: 3px 10px;
  border: none;
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
}
</style>
