/**
 * ============================================================
 *  CASSELL WEDDING — SITE CONTENT
 *  Edit this file to update names, dates, wording, and toggles.
 *  No other file needs to change for most updates.
 * ============================================================
 */

// ─── Visibility Toggles ────────────────────────────────────────
export const config = {
  showWelcomePartyDetails:  false,   // true = show venue/time; false = "details shared with invited guests"
  showWelcomePartySection:  true,    // false = hide the entire Wednesday section
  showWeddingParty:         false,   // true = show wedding party section
  showHotelInformation:     false,   // true = show hotel cards
  showRegistry:             false,   // true = show registry section
  showExactEventTimes:      false,   // true = show times; false = show "Time: TBD"
  showRSVPForm:             true,    // false = show "RSVP Coming Soon" instead
  showLocalRecommendations: false,   // true = show local favorites section
  showAfterPartyDetails:    true,    // show the Oasis / after-party section
}

// ─── Couple ────────────────────────────────────────────────────
export const couple = {
  bride:     'Corrina',
  groom:     'Evan',
  brideFull: 'Corrina Hohl',
  groomFull: 'Evan Cassell',
  lastName:  'Cassell',
  display:   'Evan & Corrina',
  hashtag:   '#CassellWedding2027',
}

// ─── Wedding Date ───────────────────────────────────────────────
export const weddingDate = {
  iso:        '2027-03-25T17:00:00',  // Update time when ceremony time is confirmed
  display:    'Thursday, March 25, 2027',
  short:      'March 25, 2027',
  location:   'Fort Myers, Florida',
  rsvpDeadline: 'January 15, 2027',   // Update when confirmed
}

// ─── Contact ────────────────────────────────────────────────────
export const contact = {
  email: 'ewcassell@gmail.com',
  phone: '2396282775',
  note:  'Please reach out with any questions.',
}

// ─── Our Story ──────────────────────────────────────────────────
export const story = {
  howWeMet: 'We met working at a bagel shop in Bloomington, Indiana.',
  body: `Our story began with two people who had no idea just how much life God would eventually ask them to build together.

We met working at a bagel shop in Bloomington, Indiana. Corrina had a dream of opening her own bagel shop one day. While they were still in college, the two of them started dreaming up something else entirely — a chopped sandwich concept that would eventually become Chop it Up. Evan turned down a job offer in Chicago to pursue it. Corrina set aside her bagel shop dream to go all in on theirs.

Three months into dating, we did something that probably looked crazy to everyone around us: we sold everything and moved to Southwest Florida together, following a call from the Lord we could not ignore. Once we got there, we found a food trailer, renovated it ourselves, and built Chop it Up from the ground up — Southwest Florida's first and only chopped sandwich shop. That leap of faith set the tone for everything that came after. We have camped in the mountains of South Carolina, explored the streets and volcanoes of El Salvador — where Evan got down on one knee — and spent countless weekends chasing sunsets, new roads, and each other all across Florida.

Building something from nothing together taught us patience, sacrifice, teamwork, and how to keep showing up for each other even when things are not easy.

But more than any adventure or any business, our story has become a story of God's faithfulness. Somewhere along the way, we found Jesus in a deeper way, and He started changing how we saw our relationship, our future, our work, and our purpose. We have learned that love is not just a feeling — it is a choice, a commitment, and something that grows stronger when it is rooted in Him.

We are so grateful for every person who has loved us, prayed for us, and walked with us through every chapter. This wedding is not just about one day. It is about celebrating what God has done, what He is still doing, and the life we are building together.`,
  prayer: 'Our prayer is that our marriage would honor God, that our home would be filled with love and peace, and that we would continue to follow wherever He leads us — together.',
  scripture: {
    show: true,
    verse: '"And now these three remain: faith, hope and love. But the greatest of these is love."',
    reference: '1 Corinthians 13:13',
  },
}

// ─── Events ─────────────────────────────────────────────────────
export const events = {

  redSox: {
    id:          'red-sox',
    day:         'Tuesday',
    date:        'March 23, 2027',
    title:       'Boston Red Sox Spring Training',
    subtitle:    'Opening Day of the Week',
    badge:       'Open to All',
    badgeStyle:  'open',
    venue:       'JetBlue Park at Fenway South',
    address:     '14400 Ben C Pratt/Six Mile Cypress Pkwy, Fort Myers, FL 33912',
    mapsUrl:     'https://maps.google.com/?q=JetBlue+Park+Fort+Myers+Florida',
    time:        'TBD',
    description: 'Join us for a Boston Red Sox spring-training game to kick off the week! Our Chop it Up trailer will be at the stadium serving, and we would love for anyone who wants to attend to come enjoy the game with us.',
    details: [
      'Open to anyone who wants to attend',
      'Evan & Corrina may purchase a suite or group tickets for everyone — details coming soon',
      'Chop it Up will be serving at the game',
    ],
    calendarNote: 'Check MLB.com for 2027 spring-training schedule and ticket availability.',
  },

  welcomeParty: {
    id:          'welcome-party',
    day:         'Wednesday',
    date:        'March 24, 2027',
    title:       'Welcome Party',
    subtitle:    'Evening Celebration',
    badge:       'By Invitation',
    badgeStyle:  'invite',
    venue:       'TBD',
    address:     '',
    mapsUrl:     '',
    time:        'TBD',
    description: 'For invited guests, we\'ll gather Wednesday evening for a relaxed welcome celebration before the big day. Location and timing will be shared as soon as they are finalized.',
    privateNote: 'Details will be shared directly with invited guests.',
  },

  ceremony: {
    id:          'ceremony',
    day:         'Thursday',
    date:        'March 25, 2027',
    title:       'Wedding Ceremony',
    subtitle:    'Along the Caloosahatchee River',
    badge:       'The Wedding',
    badgeStyle:  'wedding',
    venue:       'Edison & Ford Winter Estates',
    address:     '2350 McGregor Blvd, Fort Myers, FL 33901',
    mapsUrl:     'https://maps.google.com/?q=Edison+Ford+Winter+Estates+Fort+Myers+Florida',
    guestArrival:'TBD',
    time:        'TBD',
    description: 'Join us along the Caloosahatchee River as we exchange vows surrounded by historic gardens, palms, and the people we love most.',
    details: {
      dresscode:       'Formal',
      parking:         'On-site parking available at Edison & Ford Winter Estates',
      accessibility:   'TBD — Please contact us with accessibility needs',
      weatherPlan:     'TBD — Weather backup plan coming soon',
      unplugged:       'We kindly ask that you keep phones and cameras away during the ceremony so you can be fully present with us.',
      transportation:  'No shuttle to the ceremony — on-site parking is available',
    },
  },

  reception: {
    id:          'reception',
    day:         'Thursday',
    date:        'March 25, 2027',
    title:       'Reception & After Party',
    subtitle:    'Dinner · Dancing · Celebrating',
    badge:       'The Celebration',
    badgeStyle:  'wedding',
    venue:       'Oasis Outdoors',
    address:     '1001 Palm Ave, North Fort Myers, FL 33903',
    mapsUrl:     'https://maps.google.com/?q=1001+Palm+Ave+North+Fort+Myers+FL+33903',
    time:        'TBD',
    description: 'After the ceremony, the celebration continues at Oasis Outdoors — the outdoor venue at our store, Chop it Up. Join us for dinner, drinks, music, dancing, and a night that feels completely like us.',
    timeline: {
      cocktailHour:   'TBD',
      receptionStart: 'TBD',
      dinner:         'TBD',
      firstDance:     'TBD',
      dancing:        'TBD',
      lastCall:       'TBD',
      end:            'TBD',
    },
    details: {
      parking:        'TBD — Parking details coming soon',
      transportation: 'TBD — Shuttle between venues coming soon',
      food:           'TBD — Catering details coming soon',
      bar:            'TBD — Bar information coming soon',
    },
  },

  beach: {
    id:          'beach',
    day:         'Friday',
    date:        'March 26, 2027',
    title:       'Midwest Potluck Beach Day',
    subtitle:    'Lighthouse Beach · Sanibel Island',
    badge:       'Open to All',
    badgeStyle:  'open',
    venue:       'Lighthouse Beach Park',
    address:     '110 Periwinkle Way, Sanibel, FL 33957',
    mapsUrl:     'https://maps.google.com/?q=Lighthouse+Beach+Park+Sanibel+Florida',
    time:        'TBD',
    description: 'Trade the dress clothes for swimsuits and join us for a laid-back day at Lighthouse Beach on Sanibel Island. Bring your cooler, your favorite beach snacks, something to share, and whatever you need for a full day by the water.',
    bringList: [
      'Drinks & a cooler',
      'Potluck food or snacks to share',
      'Beach chairs & towels',
      'Sunscreen & sunglasses',
      'Umbrellas or shade tent',
      'Beach games & good vibes',
    ],
    details: {
      meetingArea:  'TBD — Look for our tent near the lighthouse',
      parking:      'TBD — Parking details coming soon',
      sanibelToll:  'There is a toll to access Sanibel Island. Exact amount TBD.',
      weatherBackup:'TBD — Weather backup plan coming soon',
      vibe:         'Come for an hour or stay all day. Open-house style — everyone is welcome.',
    },
  },

}

// ─── Travel ─────────────────────────────────────────────────────
export const travel = {
  airports: [
    {
      name:    'Southwest Florida International Airport (RSW)',
      note:    'The closest major airport. Approximately 15–20 minutes from downtown Fort Myers.',
      mapsUrl: 'https://maps.google.com/?q=Southwest+Florida+International+Airport',
    },
    {
      name:    'Punta Gorda Airport (PGD)',
      note:    'Smaller regional airport approximately 45 minutes north. Check for budget airline options.',
      mapsUrl: 'https://maps.google.com/?q=Punta+Gorda+Airport+Florida',
    },
  ],
  hotels: {
    show: true,
    note: 'We have a room block in Downtown Fort Myers and highly encourage all guests to stay there. It is walking distance to both the ceremony at Edison & Ford Winter Estates and the reception at Oasis Outdoors — and a beautiful walk across the downtown bridge connects them. Staying downtown means no traffic headaches and you can enjoy the celebration without worrying about getting around.',
    block: {
      area:    'Downtown Fort Myers',
      details: 'Room block details coming soon — check back here or watch for an email from us.',
      mapsUrl: 'https://maps.google.com/?q=Downtown+Fort+Myers+FL',
    },
    areas: ['Downtown Fort Myers'],
  },
  transportation: {
    rentalCars:   'Rental cars are widely available at RSW airport. We recommend booking early for March dates.',
    rideshare:    'Uber and Lyft are available throughout the Fort Myers area.',
    shuttle:      'Wedding-day shuttle information between the ceremony and reception is coming soon.',
  },
}

// ─── FAQ ────────────────────────────────────────────────────────
export const faq = [
  {
    q: 'When should I RSVP?',
    a: `Please RSVP by ${weddingDate.rsvpDeadline}. We want to make sure we have an accurate count for food, seating, and celebration!`,
  },
  {
    q: 'Can I bring a guest?',
    a: 'Your invitation will indicate whether a plus-one is included. Due to our venue size, we are unfortunately unable to accommodate additional guests beyond those listed on your invitation.',
  },
  {
    q: 'Are children invited?',
    a: 'TBD — We will have more information about children and families as we finalize details.',
  },
  {
    q: 'What should I wear?',
    a: 'Dress code details are coming soon! We\'ll have full attire guidance posted here. In the meantime, think: elegant and warm-weather friendly.',
  },
  {
    q: 'Where should I stay?',
    a: 'Hotel recommendations and room-block details are coming soon. Fort Myers, Sanibel, and Captiva all have beautiful options.',
  },
  {
    q: 'Will transportation be provided between the ceremony and reception?',
    a: 'We are working on shuttle information and will have details here soon.',
  },
  {
    q: 'Is parking available at the ceremony?',
    a: 'TBD — Parking details for Edison & Ford Winter Estates are coming soon.',
  },
  {
    q: 'Is the ceremony outdoors?',
    a: 'Yes! The ceremony will take place outdoors on the historic grounds of Edison & Ford Winter Estates along the Caloosahatchee River. Please dress appropriately for a beautiful Florida March day.',
  },
  {
    q: 'What happens if it rains?',
    a: 'We are working on a weather contingency plan and will share it here. Southwest Florida in late March is typically beautiful, but we will be prepared.',
  },
  {
    q: 'Can I attend the Red Sox spring-training game?',
    a: 'Yes! The game on Tuesday, March 23 is open to anyone who wants to come. Guests will purchase their own tickets. More details coming soon.',
  },
  {
    q: 'Is the welcome party open to everyone?',
    a: 'The Wednesday evening welcome party is by invitation. If you have received a specific invitation to that event, details will be shared with you directly.',
  },
  {
    q: 'What should I bring to the beach day?',
    a: 'Beach chairs, towels, sunscreen, sunglasses, a cooler with drinks, potluck food or snacks to share, and anything that makes a great beach day for you! Come for an hour or stay all day.',
  },
  {
    q: 'Will food and drinks be provided at the reception?',
    a: 'Yes! The reception will include dinner, drinks, and more. Full details coming soon.',
  },
  {
    q: 'Is there a wedding registry?',
    a: 'Registry information is coming soon.',
  },
  {
    q: 'Who should I contact with questions?',
    a: `Please email us at ${contact.email} and we will get back to you as soon as possible.`,
  },
]

// ─── Wedding Party ───────────────────────────────────────────────
export const weddingParty = {
  maidOfHonor:  { name: 'TBD', relation: 'Maid of Honor' },
  bestMan:      { name: 'TBD', relation: 'Best Man' },
  bridesmaids:  [],
  groomsmen:    [],
  officiant:    { name: 'TBD', relation: 'Officiant' },
  flowerGirl:   { name: 'TBD', relation: 'Flower Girl' },
  ringBearer:   { name: 'TBD', relation: 'Ring Bearer' },
}
