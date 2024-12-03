<template>
  <div
    class="flex flex-wrap md:flex-nowrap bg-gray-100 h-screen"
    style="width: 90%; overflow: hidden !important; margin-inline: auto"
  >
    <!-- Location Information -->
    <div class="w-full md:w-1/3 p-6 bg-white shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Our Location</h2>
      <p class="text-gray-700 mb-2">
        Address: 123 Main Street, Cityville, Country
      </p>
      <p class="text-gray-700 mb-2">Phone: +1 234 567 890</p>
      <p class="text-gray-700">Email: contact@domain.com</p>
    </div>

    <!-- Map -->
    <div class="w-full md:w-2/3 h-full">
      <div id="map" class="w-full h-full"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import maplibregl from "maplibre-gl";

export default {
  name: "Location",
  setup() {
    onMounted(() => {
      // Verify coordinates are accurate and in the correct order
      const initialState = { lng: -7.682047, lat: 33.546102, zoom: 14 }; // Casablanca [longitude, latitude]

      // Initialize the MapLibre map
      const map = new maplibregl.Map({
        container: "map", // ID of the map container
        style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json", // Free MapLibre style
        center: [initialState.lng, initialState.lat], // Center the map at Casablanca
        zoom: 12, // Zoom level for city view
      });
      const coordinates = [initialState.lng, initialState.lat]
      // Add a marker at the specified coordinates
      new maplibregl.Marker({ color: "red" }) // Ensure marker is visible
        .setLngLat(coordinates)
        .addTo(map);

      console.log("Marker added at:", coordinates);

      // Optional debugging: log map center to ensure it's correct
      map.on("load", () => {
        console.log("Map centered at:", map.getCenter().toArray());
      });
    });
  },
};
</script>

<style>
/* Removed explicit #map styling */
</style>
