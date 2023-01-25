import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "336824",
        name: "Onesta",
        uuid: "04b77fb7-61f8-4db7-98d2-705f33a7bc4c",
        city: "1",
        area: "Kammanahalli/Kalyan Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "pc1jf2sxhcz4uhbpi3b2",
        cuisines: ["Italian", "Desserts", "Pizzas", "American", "Snacks"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        slaString: "20 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant:
            "onesta-2-hrbr-first-block-layout-kammanahallikalyan-nagar",
          city: "Bangalore",
        },
        cityState: "1",
        address: "",
        locality: "1st Block Hrbr Layout",
        parentId: 11785,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "BASE_DISTANCE",
              fee: 3000,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3000,
          message: "",
          title: "Delivery Charge",
          amount: "3000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              description: "",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=336824",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 20,
          minDeliveryTime: 20,
          maxDeliveryTime: 20,
          lastMileTravel: 0,
          lastMileDistance: 1.2,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "23790",
        name: "Domino's Pizza",
        uuid: "03d3db8c-8faf-4b14-82e4-72c331de349d",
        city: "1",
        area: "Bangalore",
        totalRatingsString: "",
        cloudinaryImageId: "t9ebshx5xzupvep5i8nk",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "45 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "dominos-pizza-kasturi-nagar-main-road-banaswadi",
          city: "Bangalore",
        },
        cityState: "1",
        address: "",
        locality: "Kasturinagar Main Road",
        parentId: 2456,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "BASE_DISTANCE",
              fee: 3000,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3000,
          message: "",
          title: "Delivery Charge",
          amount: "3000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=23790",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 45,
          minDeliveryTime: 45,
          maxDeliveryTime: 45,
          lastMileTravel: 0,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "156540",
        name: "Pizza Theatre",
        uuid: "9b84690a-be21-434d-9c31-7d47d7694274",
        city: "1",
        area: "Kammanahalli",
        totalRatingsString: "",
        cloudinaryImageId: "j5n3wfeldydxn2k93vgz",
        cuisines: [
          "Italian",
          "American",
          "Desserts",
          "Beverages",
          "Pastas",
          "Continental",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "pizza-theatre-test-prod-area",
          city: "Bangalore",
        },
        cityState: "1",
        address: "",
        locality: "Subbanna Palya",
        parentId: 158997,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "BASE_DISTANCE",
              fee: 3000,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3000,
          message: "",
          title: "Delivery Charge",
          amount: "3000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.7 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=156540",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 27,
          minDeliveryTime: 27,
          maxDeliveryTime: 27,
          lastMileTravel: 0,
          lastMileDistance: 0.7,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.6",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "24755",
        name: "Vinny's",
        uuid: "4d3dc6df-9c3b-45c8-8226-f15e4890b569",
        city: "1",
        area: "Sanjay Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "ca12omkbp9axgkwop4qf",
        cuisines: ["Pizzas", "Italian", "Pastas", "Beverages", "Chinese"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant:
            "vinnys-sanjay-nagar-new-bel-rd-yeshwanthpur-sanjay-nagar-new-bel-road-yeshwanthpur",
          city: "Bangalore",
        },
        cityState: "1",
        address: "",
        locality: "New BEL Road",
        parentId: 2577,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "BASE_DISTANCE",
              fee: 7700,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 7700,
          message: "",
          title: "Delivery Charge",
          amount: "7700",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "9 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=24755",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 0,
          lastMileDistance: 9,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.7",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  /*Using Destructuring*/
  //   const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data.data;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="label"
      ></img>
      <h2>{name}</h2>
      <p className="text">{cuisines.join(", ")}</p>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard
            {...restaurant.data.data}
            key={restaurant.data.data.id}
          />
        );
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
