
import { lusitana } from '@/app/ui/fonts';
import MapData from "@/app/ui/mapsdata";
import { GeoJsonFeatureCollection } from '@/app/lib/definitions'
export default async function Page() {
  

  const geoJsonData: GeoJsonFeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [106.83255267347778, -6.144487614638791],
            [106.60496439056823, -6.12959313640097],
            [106.69986031267973, -6.380379062872336],
            [106.78411943399686, -6.369650455844948],
            [106.81032284670505, -6.468525307043976],
            [106.7454670034167, -6.5959856373063985],
            [106.76508299258882, -6.672629745565615],
            [106.89928124847575, -6.635262850594003],
            [106.84497277329922, -6.133907533893364],
            [106.83257642123766, -6.1444638354200976]
          ]
        }
      }
    ]
  }; 

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Geo JSON Data
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
         <MapData geoJsonData={geoJsonData} />
      </div>
    </main>
  );
}