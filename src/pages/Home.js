import React from "react";


export default function Home() {
    return (
		<div className="flex-auto justify-center center-items bg-gradient-to-b from-blue-900 to-gray-900">
      <img className="mx-auto" loading="lazy" width="1024" height="516"
        src="/images/Science-Live-Logo-2.png" alt="Science L!VE - Roger Billings and Pajet"
        srcSet="/images/Science-Live-Logo-2.png 1024w, /images/Science-Live-Logo-2-980x494.png 980w, /images/Science-Live-Logo-2-480x242.png 480w"
        sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw"
	  />
      <div>
		  <a className="" href="#latest_ep">WATCH NOW</a>
	  </div>
    </div>
	);

}


