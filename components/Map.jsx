"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import {
  mapContainer,
  TileLayer,
  Marker,
  Popup,
  MapContainer,
} from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const markers = [
  {
    position: [35.7599, 51.3351],
    title: "آدرس اول",
    sutitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    image: "/map/1.png",
  },
  {
    position: [35.8066, 51.4002],
    title: "آدرس دوم",
    sutitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    image: "/map/2.png",
  },
  {
    position: [35.7863, 51.3811],
    title: "آدرس سوم",
    sutitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    image: "/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
    const isMobile = useMediaQuery({
        query:'(max-width:768px',
    })
  return (
    <motion.section
    variants={fadeIn("up",0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.2}}
    className="relative xl:after:w-full xl:after:h-[240px]
    xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20
    xl:after:absolute xl:after:top-0 xl:after:z-20" id="contact">
      <MapContainer
        center={[35.7624, 51.3916]}
        zoom={isMobile ? 12 : 13}
        className={`${isMobile ? "h-[300px]" : "h-[700px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {markers.map((marker,index)=>{
            return(
                <Marker key={index} position={marker.position} icon={customIcon}>
                    <Popup>
                        <div className="flex gap-x-[30px] p-4">
                            <div className="flex-1 text-right">
                                <h3>{marker.title}</h3>
                                <p className="leading-snug">{marker.sutitle}</p>
                            </div>
                            <div className="flex-1">
                                <Image src={marker.image} width={130} height={160} alt="."/>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            )
        })}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
