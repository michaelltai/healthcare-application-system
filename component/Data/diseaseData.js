export const diseaseData = [
  {
    name: "Abdominal Aortic Aneurysm",
    description:
      "Abdominal aortic aneurysm is an enlarged area in the lower part of the aorta, the major blood vessel that supplies blood to the body. Large aneurysms are rare, but can be very serious. If a large aneurysm bursts, it causes huge internal bleeding and is usually fatal. The bulging occurs when the wall of the aorta weakens. It is common in men aged over 65. A rupture accounts for more than 1 in 50 of all deaths in this group.",
    symptoms: [
      "A pulsating feeling in your stomach (abdomen)",
      "Deep, constant pain in your abdomen or on the side of your abdomen",
      "Back Pain",
    ],
    causes: [
      {
        name: "Tobacco use",
        description:
          "Cigarette smoking and other forms of tobacco use appear to increase your rish of Aortic Aneurysms. Smoking also contributes to buildup of fatty plaques in your arteries and high blood pressure. It may also cause aneurysm to grow faster by further damaging the aorta",
      },
      {
        name: "Hardening of the arteries (atherosclerosis)",
        description:
          "Atherosclerosis occurs when fat and other substances build up on the lining of a blood vessel, increasing your risk of an aneurysm",
      },
      {
        name: "Infection in the aorta (Vasculitis)",
        description:
          "In rare cases, Abdominal Aortic Aneurysm may be caused by an infection or inflammation that weakens a section of the aortic wall",
      },
    ],
    treatment: [
      {
        name: "Open-abdominal surgery",
        description:
          "This surgery involve removing the damaged section of the aorta and replacing it with a synthetic tube (graft), which is swen into place, through an open-abdominal approach. With this type of surgery, it will likely take you a month or more to fully recover",
      },
      {
        name: "Endovascular surgery",
        description:
          "This is a less invasive procedure used to repair an aneurysm. Doctors attach a synthetic graft to the end of a thin tube (catheter) that's inserted through an artery in your leg and threaded up into your aorta. The graft - a woven tube covered by a metal mesh support is placed at the site of the aneurysm and fastened in place with small hooks or pins. The graft reinforces the weakened section of the aorta to prevent rupture of the aneurysm",
      },
    ],
  },
  {
    name: "Acne",
    description:
      "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. Acne usually appears on your face, next, chest, back, and shoulders. Acne is most common among teenagers, with a reported prevalence of 70 to 87 percent. Increasingly, younger children are getting Acne as well. Acne can cause emotional distress and scar the skin.",
    symptoms: [
      "Whiteheads (closed plugged pores)",
      "Blackheads (open plugged pores)",
      "Small red, tender bumps (papules)",
      "Pimples (pustules), which are papules with pus at their tips",
      "Large, solid, painful lumps beneath the surface of the skin (nodules)",
      "Painful, pus-filled lumps beneath the surface of the skin (cystic lesions)",
    ],
    causes: [
      {
        name: "Hormones",
        description:
          "Androgens are hormones that increases in boys and girls during puberty and cause the sebaceous glands to enlarge and make more sebums. Hormonal changes related to pregnancy and the use of oral contraceptives also can affect sebum production.",
      },
      {
        name: "Certain medications",
        description:
          "Drugs containing corticosteroids, androgens or lithium can worsen Acne.",
      },
      {
        name: "Diet",
        description:
          "Studies indicate that certain dietary factors, including diary products and carbohydrate-rich foods may trigger Acne.",
      },
      {
        name: "Stress",
        description: "Stress can make Acne worse",
      },
    ],
    treatment: [
      {
        name: "Topical Retinoids",
        description:
          "These come as creams, gels, and lotions. Retinoid drugs are derived from vitamin A and include tretinoin, adapalene, and tazarotene. Apply these medication in the evening, beginning with three times a week, then daily as your skin becomes used to it. It work by preventing plugging of hair follicles.",
      },
      {
        name: "Topical Antibiotics",
        description:
          "These works by killing excess skin bacteria and reducing redness. The antibiotics are often combined with benzoyl peroxide to reduce the likelihood of developing antibiotic resistance.",
      },
      {
        name: "Combined Oral Contraceptives",
        description:
          "This is useful in treating Acne in women and adolescent girls. The most common side effects of these drugs are headache, breast tenderness, nausea, weight gain, and breakthrough bleeding.",
      },
      {
        name: "Anti-androgen agent",
        description:
          "The drug may be considered for women and adolescent girls if oral antibiotic aren't helping. It work by blocking the effect of androgen hormones on the sebaceous glands",
      },
    ],
  },
  {
    name: "HIV/AIDS",
    description:
      "AIDS is a chronic, potentially life-threatening condition caused by HIV. HIV interferes with your body's ability to fight the organisms that cause disease. HIV are transmitted sexually and also be spread by contact with infected blood or from mother to child during pregnancy, childbirth or breast-feeding. There's no cure for HIV/AIDS, but there are medications that can slow disease progression which may reduce the fatality of this disease.",
    symptoms: [
      "Fever",
      "Headache",
      "Rash",
      "Muscle Ache",
      "Mouth or genital ulcers",
      "Swollen lymph glands, maninly on the neck",
      "Joint pain",
      "Night sweats",
    ],
    causes: [
      {
        name: "Sexual Intercourse",
        description:
          "You may become infected if you have vaginal, anal, or oral sex with an infected partnet whose blood, semen or vaginal secretions enter your body. Thie virus can enter your body through mouth sores or small tears that sometimes develop in sexual activity.",
      },
      {
        name: "Blood Transfusions",
        description:
          "In some cases, the virus may be transmitted through blood transfusions. Many hospitals and blood banks now screen the blood supply for HIV antibodies, so this risk is quite small.",
      },
      {
        name: "Sharing Needles",
        description:
          "HIV can be transmitted through needles and syringes contaminated with infected blood. Sharing intravenous drug paraphernalia puts you at high risk of HIV and other infectious diseases such as Hepatitis.",
      },
      {
        name: "Pregnancy",
        description:
          "Infected mothers can infect their babies. But receiving treatment for HIV infection during pregnancy, mothers significantly lower the risk to their babies.",
      },
    ],
    treatment: [
      {
        name: "Integrase inhibitors",
        description:
          "Raltegravir (Isentress) works by disabling integrase, a protein that HIV uses to insert its genetic material into CD4 cells.",
      },
      {
        name: "Entry or fusion inhibitors",
        description:
          "These drugs block HIV's entry into CD4 cells. Examples include enfuvirtide (Fuzeon) and maraviroc (Selzentry).",
      },
      {
        name: "Protease inhibitors (Pls)",
        description:
          "Pls disable protease, another protein that HIV needs to make copies of itself. Examples include atazanavir (Reyataz), darunavir (Prezista), fosamprenavir (Lexiva), and ritonavir (Novir).",
      },
      {
        name: "Nucleoside reverse transcriptase inhibitors (NRTIs)",
        description:
          "NRTIs are faulty versions of building blocks that HIV needs to make copies of itself. Examples include Abacavir (Ziagen) and the combination drugs emtricitabine and tenofovir (Truvada), and lamivudine and zidovudine (Combivir).",
      },
    ],
  },
  {
    name: "Asthma",
    description:
      "Asthma is a condition in which your airways narrow and swell and produce extra mucus.This can make breathing difficult and trigger coughing, wheezing, and shortness of breath. Asthma can't be cured, but its symptoms can be controlled. Because asthma often changes over time, it's important that you work with your doctor to track your sign and symptoms and adjust treatment as needed.",
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Trouble sleeping cause by shortness of breath, coughing, or wheezing",
      "Coughing or wheezing attacks that are worsened by a respiratory virus, such as a cold or flu",
      "A whistling or wheezing sound when exhaling",
    ],
    causes: [
      {
        name: "Airbone allergens",
        description:
          "Allergens such as pollen, animal dander, mold, cockroaches, and dust mites can trigger signs and symptoms of asthma.",
      },
      {
        name: "Physical activity",
        description:
          "Some strenuous exercise may narrow the airways in the lungs and may cause shortness of breath during or after exercise.",
      },
      {
        name: "Medications",
        description:
          "Certain medications, including beta blockers, aspirin, ibuprofen, and naproxen are some of the causes for the trigger of asthma",
      },
      {
        name: "Stomach reflux",
        description:
          "Gastroesophageal reflux disease is a condition in which stomach acids back up into your throat and this can be one of the factors that may trigger symptoms of asthma.",
      },
    ],
    treatment: [
      {
        name: "Leukotriene modifiers",
        description:
          "These oral medications help relieve asthma symptoms for up to 24 hours. In rare cases, these medications have been linked to psychological reactgions, such as agitation, agression,hallucinations, depression, and suicidal thinking. Seek medical advice right away for any unusual reaction.",
      },
      {
        name: "Long-acting beta agonists",
        description:
          "These inhaled medications open the airways. Some research shows that they may increase the risk of severe asthma attack, so take them only in combination with an inhaled corticosteroid. Do not use them for acute asthma attack.",
      },
      {
        name: "Combination inhalers",
        description:
          "These medications contain a long-acting beta agonist along with corticosteroid. Because these combination inhalers contain long-acting beta agonists, they may increase your risk of having a severe asthma attack.",
      },
      {
        name: "Theophylline",
        description:
          "Theophylline is a daily pill that helps keep the airways open by relaxing the muscles around the airways. It's not used as often now as in past years.",
      },
      {
        name: "Ipratropium",
        description:
          "Ipratropium acts quickly to immediately relax your airways, making it easier to breathe. Ipratropium is mostly used for Emphysema and chronic Bronchitis, but it's sometimes used to treat asthma attacks.",
      },
      {
        name: "Oral and intreavenous corticosteroids",
        description:
          "These medications relieve airway inflammation caused by severe asthma. They can cause serious side effects when used long term, so they're used only on a short-term basis to treat severe asthma symptoms.",
      },
    ],
  },
  {
    name: "Avian Influenza (Bird flu)",
    description:
      "Avian Influenza is caused by a type of influenza virus that rarely infects humans. More than a dozen types of bird flu have been identified, including the two strains that have most recently infected humans — H5N1 and H7N9. When bird flu does strike humans, it can be deadly.",
    symptoms: [
      "Cough",
      "Fever",
      "Sore throat",
      "Muscle aches",
      "Headache",
      "Shortness of breath",
    ],
    causes: [
      {
        name: "Domestic poultry",
        description:
          "Bird flu occurs naturally in wild waterfowl and can spread into domestic poultry, such as chickens, turkeys, ducks and geese. The disease is transmitted via contact with an infected bird's feces, or secretions from its nose, mouth or eyes.",
      },
      {
        name: "Open-air markets",
        description:
          "Open-air markets, where eggs and birds are sold in crowded and unsanitary conditions, are hotbeds of infection and can spread the disease into the wider community.",
      },
      {
        name: "Undercooked poultry meat or eggs",
        description:
          "Undercooked poultry meat or eggs from infected birds can transmit bird flu. Poultry meat is safe to eat if it's been cooked to an internal temperature of 165 F (74 C). Eggs should be cooked until the yolks and whites are firm.",
      },
    ],
    treatment: [
      {
        name: "Antiviral Medication",
        description:
          "Many influenza viruses have become resistant to the effects of a category of antiviral drugs that includes amantadine and rimantadine (Flumadine). Health officials recommend the use of oseltamivir (Tamiflu) or, if oseltamivir can't be used, zanamivir (Relenza). These drugs must be taken within two days after the appearance of symptoms.",
      },
    ],
  },
  {
    name: "Athlete's Foot",
    description:
      "Athlete's foot is a fungal infection that usually begins between the toes. It occurs most commonly in people whose feet have become very sweaty while confined within tight-fitting shoes.",
    symptoms: [
      "Scaly red rash",
      "Blisters",
      "Ulcers around the foot",
      "dryness and scaling on the toes",
    ],
    causes: [
      {
        name: "Fungus infection",
        description:
          "Athlete's foor is usually caused by the same type of fungus that causes ringworm and Jock itch.",
      },
      {
        name: "Damp socks and shoes",
        description:
          "Wet socks and shoes where warm and humid conditions favor the organisms to grow and spread.",
      },
    ],
    treatment: [
      {
        name: "Antifugal ointment",
        description: "",
      },
      {
        name: "Lotion",
        description: "",
      },
      {
        name: "Powder or spray",
        description: "",
      },
    ],
  },
  {
    name: "Back pain",
    description:
      "Back pain is a common complaint. Back pain is one of the most common reasons people go to the doctor or miss work. It's often very difficult to know exactly what causes back pain, but it's usually thought to be related to a strain in one of the interconnecting structures in the back, rather than a nerve problem. Back pain caused by a more serious, underlying condition is rare and very unlikely to be affected.",
    symptoms: [
      "Muscle ache",
      "Shooting or stabbing pain",
      "Pain that radiates down the leg",
      "Limited flexibility or range of motion of the back",
      "Inability to stand up straight",
    ],
    causes: [
      {
        name: "Muscle or ligament strain",
        description:
          "Repeated heavy lifting or a sudden awkward movement may strain back muscles and spinal ligaments. If you're in poor physical condition, constant strain on your back may cause painful muscle spasms.",
      },
      {
        name: "Bulging or ruptured disks",
        description:
          "Disks act as cushions between the individual bones in the spine. Sometimes, the soft material inside a disk may bulge out of place or rupture and press on a nerve. Disk disease is often found incidentally.",
      },
      {
        name: "Arthritis",
        description:
          "Osteoarthritis can affect the lower back. In some cases, Arthritis in the spine can lead to a narrowing of the space around the spinal cord, a condition called Spinal Stenosis.",
      },
      {
        name: "Skeletal irregularities",
        description:
          "Back pain can occur if your spine curves in an abnormal way. Scoliosis, a condition in which your spine curves to the side, also may lead to back pain, but generally only if the Scoliosis is quite severe.",
      },
      {
        name: "Osteoporosis",
        description:
          "Compression fractures of your spine's vertebrae can occur if your bones become porous and brittle.",
      },
    ],
    treatment: [
      {
        name: "Medications",
        description:
          "Doctor is likely to recommend pain relievers such as acetaminophen or anti-inflammatory drugs such as ibuprofen. Both types of medications are effective at relieving back pain. Doctor may also prescribe a muscle relaxant for more severe cases. Muscle relaxants can cause dizziness and sleepiness.",
      },
      {
        name: "Physical therapy",
        description:
          "Physical therapist can apply a variety of treatments such as heat, ultrasound, electrical stimulation and muscle-felease techniques to the back muscles and soft tissues to reduce pain. Specific exercises that increase flexibility and strengthen abdominal muscles also can be effective.",
      },
      {
        name: "Injections",
        description:
          "Cortisone - an anti-inflammatory medication is injected into the space around your spinal cord. This injection helps decrease inflammation around the nerve roots, but the pain relief usually lasts less than a few months.",
      },
    ],
  },
  {
    name: "Brain tumors",
    description:
      "Brain tumors  are masses or growths of abnormal cells that occur in the brain or the tissue and structures that are near it. There are several types of brain tumors exist - some are noncancerous and some are cancerous.",
    symptoms: [
      "Changes in mental function",
      "Headaches",
      "Seizures",
      "Weakness in one part of the body",
      "Dizziness or abnormal sensation of movement ",
      "Hand tremor",
      "Lack of control over the bladder or bowels",
      "Problems with eyesight, including decreased vision, double vision, or total loss of vision",
      "Trouble speaking or understanding others who are speaking",
      "Muscle weakness in the face, arm, or leg (usually on just one side)",
    ],
    causes: [
      {
        name: "Family History",
        description:
          "Only about 5 to 10 percent of all cancers are genetically inherited, or hereditary. It’s rare for a brain tumor to be genetically inherited.",
      },
      {
        name: "Age",
        description: "Risk for most types of brain tumors increases with age.",
      },
      {
        name: "Race",
        description:
          "Brain tumors in general are more common among Caucasians. However, African-American people are more likely to get meningiomas.",
      },
      {
        name: "Chemical exposure",
        description:
          "Being exposed to certain chemicals, such as those you might find in a work environment, can increase your risk for brain cancer.",
      },
      {
        name: "Exposure to radiation",
        description:
          "People who have been exposed to ionizing radiation have an increased risk of brain tumors. You can be exposed to ionizing radiation through high-radiation cancer therapies. You can also be exposed to radiation from nuclear fallout.",
      },
    ],
    treatment: [
      {
        name: "Surgery",
        description:
          "Surgery is often needed for most primary brain tumors. Some tumors may be completely removed. Those that are deep inside the brain or that enter brain tissue may be debulked instead of removed. Debulking is a procedure to reduce the tumor's size.",
      },
      {
        name: "Radiation Therapy/Chemotherapy",
        description:
          "Radiation therapy is used for certain tumors while Chemotherapy may be used with surgery or radiation treatment.",
      },
      {
        name: "Medications",
        description:
          "Certain medications are used to treat primary brain tumors which may include corticosteroids to reduce brain swelling, urea or mannitol to reduce swelling and pressure, anticonvulsants to reduce seizures, and antacids to control stress ulcers.",
      },
    ],
  },
  {
    name: "Erectile dysfunction",
    description:
      "Erectile dysfunction is the inability to keep an erection. It is more common as you get older. But male sexual dysfunction is not a natural part of aging.",
    symptoms: [
      "Trouble getting an erection",
      "Trouble keeping an erection",
      "Reduced sexual desire",
    ],
    causes: [
      {
        name: "Physical causes",
        description:
          "In many case, erectile dysfunction is caused by something physical. This includes heart disease, clogged blood vessels, high cholesterol, high blood pressure, diabetes, obesity, metabolic syndrome, parkinson's disease, tobacco use, alcoholism and other forms of substance abuse.",
      },
      {
        name: "Physchological causes",
        description:
          "The brain plays a key role in triggering the series of physical events that cause an erection. A number of things can interfere with sexual feelings and cause or worsen erectile dysfunction. These include depression, anxiety, stress, and relationship problems.",
      },
    ],
    treatment: [
      {
        name: "Oral medications",
        description:
          "Oral medications are a successful erectile dysfunction treatment for many men. They include Sildenafil(Viagra), Tadalafil(Cialis), Vardenafil(Levitra, Staxyn), Avanafil(Stendra).",
      },
      {
        name: "Alprostadil self-injection",
        description:
          "With this method, a fine needle is used to inject alprostadil into the base of the penis. Each injection generally produces and erection that lasts about an hour. Because the needle used is very fine, pain from the injection site is usually minor.",
      },
      {
        name: "Testosterone replacement",
        description:
          "Some men have erectile dysfunction that might be complicated by low levels of the hormone testosterone. In this case, testosterone replacement therapy might me recommended.",
      },
      {
        name: "Penis pump",
        description:
          "Penis pump is a hollow tube with a hand-powered pump that is used to suck out the air inside the tube. This creates a vacuum that pulls blood into your penis.",
      },
      {
        name: "Penile implants",
        description:
          "This treatment involves surgically placing devices into both sides of the penis which consists of inflatable or semirigid rods. Inflatable devices allow you to control when and how long you ahve an erection.",
      },
      {
        name: "Blood vessel surgery",
        description:
          "Rarely, leaking or obstructed blood vessels can cause erectile dysfunction. In this case, surgical repair, such as vascular stenting or a bypass procedure, might be needed.",
      },
    ],
  },
  {
    name: "Gastroenteritis (Stomach flu)",
    description:
      "Gastroenteritis is an intestinal infection marked by watery diarrhea, abdominal cramps, nausea or vomiting, and sometimes fever. It is commonly developed through contact with an infected person by ingesting contaminated food or water.",
    symptoms: [
      "Watery, usually nonbloody diarrhea - bloody diarrhea usually means you have a different, more severe infection",
      "Abdomincal cromps and pain",
      "Nausea, vomiting or both",
      "Occasional muscle aches or headache",
      "Low-grade fever",
    ],
    causes: [
      {
        name: "Noroviruses",
        description:
          "Both children and adults are affected by noroviruses, the most common cause of foodborne illness worldwide. Norovirus infection can sweep through families and communities. It's especially likely to spread among people in confined spaces.In most cases, you pick up the virus from contaminated food or water, although person-to-person transmission also is possible.",
      },
      {
        name: "Rotaviruss",
        description:
          "This is the most common cause of viral gastroenteritis in children, who are usually infected when they put their fingers or other objects contaminated with the virus into their mouths. The infection is most severe in infants and young children. Adults infected with rotavirus may not have symptoms, but can still spread the illness — of particular concern in institutional settings because infected adults unknowingly can pass the virus to others.",
      },
    ],
    treatment: [
      {
        name: "Self-care measures",
        description:
          "There's no effective treatment for viral gastroenteritis, so prevention is key. In addition to avoiding food and water that may be contaminated, thorough and frequent hand-washings are your best defense.",
      },
    ],
  },
  {
    name: "Chickenpox",
    description:
      "Chickenpox is an infection caused by the varicella-zoster virus. It causes an itchy rash with small, fluid-filled blisters. Chickenpox is highly contagious to people who haven't had the disease or been vaccinated against it.",
    symptoms: [
      "Fever",
      "Loss of appetite",
      "Headache",
      "Tiredness and a general feeling of being unwell (malaise)",
    ],
    causes: [
      {
        name: "Varicella-zoster virus",
        description:
          "Chickenpox infection is caused by the varicella-zoster virus. It can spread through direct contact with the rash. It can also spread when a person with the chickenpox coughs or sneezes and you inhale the air droplets.",
      },
    ],
    treatment: [
      {
        name: "Vaccine",
        description:
          "The chickenpox (varicella) vaccine is the best way to prevent chickenpox. Experts from the CDC estimate that the vaccine provides complete protection from the virus for nearly 98% of people who receive both of the recommended doses. When the vaccine doesn't provide complete protection, it significantly lessens the severity of chickenpox.",
      },
      {
        name: "Natural Revocery",
        description:
          "Chickenpox typically needs no medical treatment. Your doctor may prescribe an antihistamine to relieve itching. But for the most part, the disease is allowed to run its course.",
      },
    ],
  },
  {
    name: "Cholera",
    description:
      "Cholera is a bacterial disease usually spread through contaminated water. Cholera causes severe diarrhea and dehydration. Left untreated, cholera can be fatal within hours, even in previously healthy people.",
    symptoms: ["Diarrhea", "Nausea and vomiting", "Dehydration"],
    causes: [
      {
        name: "Surface or well water",
        description:
          "Contaminated public wells are frequent sources of large-scale cholera outbreaks. People living in crowded conditions without adequate sanitation are especially at risk.",
      },
      {
        name: "Seafood",
        description:
          "Eating raw or undercooked seafood, especially shellfish, that comes from certain places can expose you to cholera bacteria.",
      },
      {
        name: "Raw fruits and vegetables",
        description:
          "Raw, unpeeled fruits and vegetables are a frequent source of cholera infection in areas where there's cholera. In developing countries, uncomposted manure fertilizers or irrigation water containing raw sewage can contaminate produce in the field.",
      },
      {
        name: "Grains",
        description:
          "In regions where cholera is widespread, grains such as rice and millet that are contaminated after cooking and kept at room temperature for several hours can grow cholera bacteria.",
      },
    ],
    treatment: [
      {
        name: "Rehydration",
        description:
          "The goal is to replace lost fluids and electrolytes using a simple rehydration solution, oral rehydration salts (ORS). The ORS solution is available as a powder that can be made with boiled or bottled water.",
      },
      {
        name: "Intravenous fluids",
        description:
          "Most people with cholera can be helped by oral rehydration alone, but severely dehydrated people might also need intravenous fluids.",
      },
      {
        name: "Antibiotics",
        description:
          "While not a necessary part of cholera treatment, some antibiotics can reduce cholera-related diarrhea and shorten how long it lasts in severely ill people.",
      },
      {
        name: "Zinc supplements",
        description:
          "Research has shown that zinc might decrease diarrhea and shorten how long it lasts in children with cholera.",
      },
    ],
  },
  {
    name: "Gallstones",
    description:
      "Gallstones are hardened deposits of digestive fluid that can form in your gallbladder. Your gallbladder is a small, pear-shaped organ on the right side of your abdomen, just beneath your liver. The gallbladder holds a digestive fluid called bile that's released into your small intestine.",
    symptoms: [
      "Sudden and rapidly intensifying pain un the upper right portion of your abdomen",
      "Sudden and rapidly intensifying pain in the center of your abdomen, just below the breastbone",
      "Back pain between your shoulder blades",
      "Pain in your right shoulder",
      "Nausea or vomiting",
    ],
    causes: [
      {
        name: "Bile contains too much cholesterol",
        description:
          "Normally, your bile contains enough chemicals to dissolve the cholesterol excreted by your liver. But if your liver excretes more cholesterol than your bile can dissolve, the excess cholesterol may form into crystals and eventually into stones.",
      },
      {
        name: "Bile contains too much bilirubin",
        description:
          "Bilirubin is a chemical that's produced when your body breaks down red blood cells. Certain conditions cause your liver to make too much bilirubin, including liver cirrhosis, biliary tract infections and certain blood disorders. The excess bilirubin contributes to gallstone formation.",
      },
      {
        name: "Gallbladder doesn't empty correctly",
        description:
          " If your gallbladder doesn't empty completely or often enough, bile may become very concentrated, contributing to the formation of gallstones.",
      },
    ],
    treatment: [
      {
        name: "Surgery (Cholecystectomy)",
        description:
          "Doctor may recommend surgery to remove your gallbladder, since gallstones frequently recur. Once your gallbladder is removed, bile flows directly from your liver into your small intestine, rather than being stored in your gallbladder.",
      },
      {
        name: "Medications to dissolve gallstones",
        description:
          "Medications you take by mouth may help dissolve gallstones. But it may take months or years of treatment to dissolve your gallstones in this way, and gallstones will likely form again if treatment is stopped. Sometimes medications don't work. Medications for gallstones aren't commonly used and are reserved for people who can't undergo surgery.",
      },
    ],
  },
  {
    name: "Common Cold",
    description:
      "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold. Healthy adults can expect to have two or three colds each year. Infants and young children may have even more frequent colds.",
    symptoms: [
      "Runny or stuffy nose",
      "Sore throat",
      "Cough",
      "Congestion",
      "Slight body aches or a mild headache",
      "Sneezing",
      "Low-grade fever",
      "Generally feeling unwell",
    ],
    causes: [
      {
        name: "Rhinoviruses",
        description:
          "Although many types of viruses can cause a common cold, rhinoviruses are the most common cause. A cold virus enters your body through your mouth, eyes or nose. The virus can spread through droplets in the air when someone who is sick coughs, sneezes or talks. It also spreads by hand-to-hand contact with someone who has a cold or by sharing contaminated objects, such as eating utensils, towels, toys or telephones.",
      },
    ],
    treatment: [
      {
        name: "Natural Recovery",
        description:
          "There's no cure for the common cold. Most cases of the common cold get better without treatment, usually within a week to 10 days. But a cough may linger for a few more days. The best thing you can do is take care of yourself while your body heals. Antibiotics are of no use against cold viruses and shouldn't be used unless there's a bacterial infection.",
      },
    ],
  },
  {
    name: "Dengue Fever",
    description:
      "Dengue fever is a mosquito-borne illness that occurs in tropical and subtropical areas of the world. Mild dengue fever causes a high fever and flu-like symptoms. The severe form of dengue fever, also called dengue hemorrhagic fever, can cause serious bleeding, a sudden drop in blood pressure (shock) and death.",
    symptoms: [
      "Headache",
      "Muscle, bone or joint pain",
      "Nausea",
      "Vomiting",
      "Pain behind the eyes",
      "Swollen glands",
      "Rash",
    ],
    causes: [
      {
        name: "Mosquito bites",
        description:
          "Dengue fever is caused by any one of four types of dengue viruses. You can't get dengue fever from being around an infected person. Instead, dengue fever is spread through mosquito bites. The two types of mosquitoes that most often spread the dengue viruses are common both in and around human lodgings. When a mosquito bites a person infected with a dengue virus, the virus enters the mosquito. Then, when the infected mosquito bites another person, the virus enters that person's bloodstream and causes an infection.",
      },
    ],
    treatment: [
      {
        name: "Natural recovery",
        description:
          "No specific treatment for dengue fever exists. While recovering from dengue fever, drink plenty of fluids. The over-the-counter (OTC) drug acetaminophen (Tylenol, others) can help reduce muscle pain and fever. But if you have dengue fever, you should avoid other OTC pain relievers, including aspirin, ibuprofen (Advil, Motrin IB, others) and naproxen sodium (Aleve). These pain relievers can increase the risk of dengue fever bleeding complications.",
      },
    ],
  },
  {
    name: "Diabetes",
    description:
      "Diabetes mellitus refers to a group of diseases that affect how your body uses blood sugar (glucose). Glucose is vital to your health because it's an important source of energy for the cells that make up your muscles and tissues. It's also your brain's main source of fuel. The underlying cause of diabetes varies by type. But, no matter what type of diabetes you have, it can lead to excess sugar in your blood. Too much sugar in your blood can lead to serious health problems.",
    symptoms: [
      "Increased thirst",
      "Frequent urination",
      "Extreme hunger",
      "Unexplained weight loss",
      "Presence of ketones in urine",
      "Fatigue",
      "Irritability",
      "Blurred vision",
      "Slow-healing sores",
      "Frequent infections",
    ],
    causes: [
      {
        name: "Causes of Type 1 diabetes",
        description:
          "The immune system — which normally fights harmful bacteria or viruses — attacks and destroys the insulin-producing cells in the pancreas. This leaves you with little or no insulin. Instead of being transported into your cells, sugar builds up in your bloodstream. Type 1 is thought to be caused by a combination of genetic susceptibility and environmental factors, though exactly what those factors are is still unclear. Weight is not believed to be a factor in type 1 diabetes.",
      },
      {
        name: "Causes of Prediabetes and Type 2 diabetes",
        description:
          "In prediabetes — which can lead to type 2 diabetes — and in type 2 diabetes, your cells become resistant to the action of insulin, and your pancreas is unable to make enough insulin to overcome this resistance. Instead of moving into your cells where it's needed for energy, sugar builds up in your bloodstream. Exactly why this happens is uncertain, although it's believed that genetic and environmental factors play a role in the development of type 2 diabetes too. Being overweight is strongly linked to the development of type 2 diabetes, but not everyone with type 2 is overweight.",
      },
      {
        name: "Causes of Gestational diabetes",
        description:
          "During pregnancy, the placenta produces hormones to sustain your pregnancy. These hormones make your cells more resistant to insulin. Normally, your pancreas responds by producing enough extra insulin to overcome this resistance. But sometimes your pancreas can't keep up. When this happens, too little glucose gets into your cells and too much stays in your blood, resulting in gestational diabetes.",
      },
    ],
    treatment: [
      {
        name: "Healthy eating",
        description:
          "Contrary to popular perception, there's no specific diabetes diet. You'll need to center your diet on more fruits, vegetables, lean proteins and whole grains — foods that are high in nutrition and fiber and low in fat and calories — and cut down on saturated fats, refined carbohydrates and sweets.",
      },
      {
        name: "Physical activity",
        description:
          "Exercise lowers your blood sugar level by moving sugar into your cells, where it's used for energy. Exercise also increases your sensitivity to insulin, which means your body needs less insulin to transport sugar to your cells.",
      },
      {
        name: "Monitoring your blood sugar",
        description:
          "Check and record your blood sugar as many as four times a day or more often if you're taking insulin. Careful monitoring is the only way to make sure that your blood sugar level remains within your target range.",
      },
      {
        name: "Insulin",
        description:
          "People with type 1 diabetes need insulin therapy to survive. Many people with type 2 diabetes or gestational diabetes also need insulin therapy. Insulin can't be taken orally to lower blood sugar because stomach enzymes interfere with insulin's action. Often insulin is injected using a fine needle and syringe or an insulin pen — a device that looks like a large ink pen.",
      },
      {
        name: "Transplantation",
        description:
          "In some people who have type 1 diabetes, a pancreas transplant may be an option. Islet transplants are being studied as well. With a successful pancreas transplant, you would no longer need insulin therapy.",
      },
      {
        name: "Bariatric surgery",
        description:
          "Although it is not specifically considered a treatment for type 2 diabetes, people with type 2 diabetes who are obese and have a body mass index higher than 35 may benefit from this type of surgery. People who've undergone gastric bypass have seen significant improvements in their blood sugar levels.",
      },
    ],
  },
  {
    name: "Heart Attack",
    description:
      "A heart attack occurs when the flow of blood to the heart is blocked. The blockage is most often a buildup of fat, cholesterol and other substances, which form a plaque in the arteries that feed the heart (coronary arteries). Sometimes, a plaque can rupture and form a clot that blocks blood flow. The interrupted blood flow can damage or destroy part of the heart muscle.",
    symptoms: [
      "Pressure, tightness, pain, or a squeezing or aching sensation in your chest or arms that may spread to your neck, jaw or back",
      "Nausea, indigestion, heartburn or abdominal pain",
      "Shortness of breath",
      "Cold sweat",
      "Fatigue",
      "Lightheadedness or sudden dizziness",
    ],
    causes: [
      {
        name: "Buildup of fatty deposits",
        description:
          "A heart attack occurs when one or more of your coronary arteries becomes blocked. Over time, a buildup of fatty deposits, including cholesterol, form substances called plaques, which can narrow the arteries (atherosclerosis). This condition, called coronary artery disease, causes most heart attacks.",
      },
      {
        name: "Spasm of coronary artery",
        description:
          "Another cause of a heart attack is a spasm of a coronary artery that shuts down blood flow to part of the heart muscle. Using tobacco and illicit drugs, such as cocaine, can cause a life-threatening spasm.",
      },
    ],
    treatment: [
      {
        name: "Aspirin",
        description:
          "Aspirin reduces blood clotting, thus helping maintain blood flow through a narrowed artery.",
      },
      {
        name: "Thrombolytics",
        description:
          "These drugs, also called clotbusters, help dissolve a blood clot that's blocking blood flow to your heart. The earlier you receive a thrombolytic drug after a heart attack, the greater the chance you'll survive and have less heart damage.",
      },
      {
        name: "Pain relievers",
        description: "You might be given a pain reliever, such as morphine.",
      },
      {
        name: "Nitroglycerin",
        description:
          "This medication, used to treat chest pain (angina), can help improve blood flow to the heart by widening (dilating) the blood vessels.",
      },
      {
        name: "Beta blockers",
        description:
          "These medications help relax your heart muscle, slow your heartbeat and decrease blood pressure, making your heart's job easier. Beta blockers can limit the amount of heart muscle damage and prevent future heart attacks.",
      },
      {
        name: "Coronary angioplasty and stenting",
        description:
          "Doctors guide a long, thin tube (catheter) through an artery in your groin or wrist to a blocked artery in your heart. If you've had a heart attack, this procedure is often done immediately after a cardiac catheterization, a procedure used to find blockages. The catheter has a special balloon that, once in position, is briefly inflated to open a blocked coronary artery. A metal mesh stent almost always is inserted into the artery to keep it open long term, restoring blood flow to the heart. Usually, you get a stent coated with a slow-releasing medication to help keep your artery open.",
      },
      {
        name: "Coronary artery bypass surgery.",
        description:
          "Bypass surgery involves sewing veins or arteries in place beyond a blocked or narrowed coronary artery, allowing blood flow to the heart to bypass the narrowed section. ",
      },
    ],
  },
  {
    name: "Hepatitis B",
    description:
      "Hepatitis B is a serious liver infection caused by the hepatitis B virus (HBV). For some people, hepatitis B infection becomes chronic, meaning it lasts more than six months. Having chronic hepatitis B increases your risk of developing liver failure, liver cancer or cirrhosis — a condition that permanently scars of the liver.",
    symptoms: [
      "Abdominal pain",
      "Dark urine",
      "Fever",
      "Joint pain",
      "Loss of appetite",
      "Nausea and vomiting",
      "Weakness and fatigue",
      "Yellowing of your skin and the whites of your eyes",
    ],
    causes: [
      {
        name: "Sexual contact",
        description:
          "You may get hepatitis B if you have unprotected sex with someone who is infected. The virus can pass to you if the person's blood, saliva, semen or vaginal secretions enter your body.",
      },
      {
        name: "Sharing of needles",
        description:
          "HBV easily spreads through needles and syringes contaminated with infected blood. Sharing IV drug paraphernalia puts you at high risk of hepatitis B.",
      },
      {
        name: "Accidental needle sticks",
        description:
          "Hepatitis B is a concern for health care workers and anyone else who comes in contact with human blood.",
      },
      {
        name: "Mother to child",
        description:
          "Pregnant women infected with HBV can pass the virus to their babies during childbirth. However, the newborn can be vaccinated to avoid getting infected in almost all cases. Talk to your doctor about being tested for hepatitis B if you are pregnant or want to become pregnant.",
      },
    ],
    treatment: [
      {
        name: "Antiviral medications",
        description:
          "Several antiviral medications — including entecavir (Baraclude), tenofovir (Viread), lamivudine (Epivir), adefovir (Hepsera) and telbivudine (Tyzeka) — can help fight the virus and slow its ability to damage your liver. These drugs are taken by mouth. Talk to your doctor about which medication might be right for you.",
      },
      {
        name: "Interferon injections",
        description:
          "Interferon alfa-2b (Intron A) is a man-made version of a substance produced by the body to fight infection. It's used mainly for young people with hepatitis B who wish to avoid long-term treatment or women who might want to get pregnant within a few years, after completing a finite course of therapy. Interferon should not be used during pregnancy. Side effects may include nausea, vomiting, difficulty breathing and depression.",
      },
      {
        name: "Liver transplant",
        description:
          "If your liver has been severely damaged, a liver transplant may be an option. During a liver transplant, the surgeon removes your damaged liver and replaces it with a healthy liver. Most transplanted livers come from deceased donors, though a small number come from living donors who donate a portion of their livers.",
      },
    ],
  },
  {
    name: "High Blood Pressure (Hypertension)",
    description:
      "High blood pressure (hypertension) is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.",
    symptoms: ["Headaches", "Shortness of breath", "Nosebleeds"],
    causes: [
      {
        name: "Obstructive sleep apnea",
        description: "",
      },
      {
        name: "Kidney disease",
        description: "",
      },
      {
        name: "Adrenal gland tumors",
        description: "",
      },
      {
        name: "Thyroid problems",
        description: "",
      },
      {
        name: "Certain medications, such as birth control pills, cold remedies, decongestants, over-the-counter pain relievers and some prescription drugs",
        description: "",
      },
      {
        name: "Illegal drugs, such as cocaine and amphetamines",
        description: "",
      },
    ],
    treatment: [
      {
        name: "Diuretics",
        description:
          "Diuretics, sometimes called water pills, are medications that help your kidneys eliminate sodium and water from the body. These drugs are often the first medications tried to treat high blood pressure.",
      },
      {
        name: "Angiotensin-converting enzyme (ACE) inhibitors",
        description:
          "These medications — such as lisinopril (Prinivil, Zestril), benazepril (Lotensin), captopril and others — help relax blood vessels by blocking the formation of a natural chemical that narrows blood vessels.",
      },
      {
        name: "Angiotensin II receptor blockers (ARBs)",
        description:
          "These medications relax blood vessels by blocking the action, not the formation, of a natural chemical that narrows blood vessels. ARBs include candesartan (Atacand), losartan (Cozaar) and others.",
      },
      {
        name: "Calcium channel blockers",
        description:
          "These medications — including amlodipine (Norvasc), diltiazem (Cardizem, Tiazac, others) and others — help relax the muscles of your blood vessels. Some slow your heart rate. Calcium channel blockers may work better for older people and people of African heritage than do ACE inhibitors alone.",
      },
    ],
  },
  {
    name: "Influenza (flu)",
    description:
      "Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs. Influenza is commonly called the flu, but it's not the same as stomach 'flu' viruses that cause diarrhea and vomiting.",
    symptoms: [
      "Fever",
      "Aching muscles",
      "Chills and sweats",
      "Headache",
      "Dry, persistent cough",
      "Shortness of breath",
      "Tiredness and weakness",
      "Runny or stuffy nose",
      "Sore throat",
      "Eye pain",
      "Vomiting and diarrhea",
    ],
    causes: [
      {
        name: "Air droplets",
        description:
          "Influenza viruses travel through the air in droplets when someone with the infection coughs, sneezes or talks. You can inhale the droplets directly, or you can pick up the germs from an object — such as a telephone or computer keyboard — and then transfer them to your eyes, nose or mouth.",
      },
    ],
    treatment: [
      {
        name: "Natural Recovery",
        description:
          "Usually, you'll need nothing more than rest and plenty of fluids to treat the flu. But if you have a severe infection or are at higher risk for complications, your doctor may prescribe an antiviral drug to treat the flu. These drugs can include oseltamivir (Tamiflu), zanamivir (Relenza), peramivir (Rapivab) or baloxavir (Xofluza). These drugs may shorten your illness by a day or so and help prevent serious complications.",
      },
    ],
  },
  {
    name: "Kidney Failure",
    description:
      "Acute kidney failure occurs when your kidneys suddenly become unable to filter waste products from your blood. When your kidneys lose their filtering ability, dangerous levels of wastes may accumulate, and your blood's chemical makeup may get out of balance. Acute kidney failure can be fatal and requires intensive treatment. However, acute kidney failure may be reversible. If you're otherwise in good health, you may recover normal or nearly normal kidney function.",
    symptoms: [
      "Decreased urine output",
      "Fluid retention",
      "Shortness of breath",
      "Fatigue",
      "Confusion",
      "Nausea",
      "Weakness",
      "Irregular heartbeat",
      "Chest pain or pressure",
      "Seizures or coma in severe cases",
    ],
    causes: [
      {
        name: "Impaired blood flow to the kidneys",
        description:
          "Diseases and conditions that may slow blood flow to the kidneys and lead to kidney injury include blood or fluid loss, blood pressure medication, heart attack, heart disease, infection, liver failure, use of aspirin, severe allergic reaction, severe burns, severe dehydration",
      },
      {
        name: "Damage to the kidneys",
        description:
          "These diseases, conditions and agents may damage the kidneys and lead to acute kidney failure; blood clots, cholesterol deposits, glomerulonephritis, hemolytic uremic syndrome, infection, lupus, and medication",
      },
      {
        name: "Urine blockage in the kidneys",
        description:
          "Diseases and conditions that block the passage of urine out of the body (urinary obstructions) and can lead to acute kidney injury include bladder cancer, blood clots in the urinary tract, cervical cancer, colon cancer, enlarged prostate, kidney stones",
      },
    ],
    treatment: [
      {
        name: "Treating the underlying cause of your kidney injury",
        description:
          "Treatment for acute kidney failure involves identifying the illness or injury that originally damaged your kidneys. Your treatment options depend on what's causing your kidney failure.",
      },
      {
        name: "Treatments to balance the amount of fluids in your blood",
        description:
          "If your acute kidney failure is caused by a lack of fluids in your blood, your doctor may recommend intravenous (IV) fluids. In other cases, acute kidney failure may cause you to have too much fluid, leading to swelling in your arms and legs. In these cases, your doctor may recommend medications (diuretics) to cause your body to expel extra fluids.",
      },
      {
        name: "Medications to control blood potassium",
        description:
          "If your kidneys aren't properly filtering potassium from your blood, your doctor may prescribe calcium, glucose or sodium polystyrene sulfonate (Kionex) to prevent the accumulation of high levels of potassium in your blood. Too much potassium in the blood can cause dangerous irregular heartbeats (arrhythmias) and muscle weakness.",
      },
      {
        name: "Medications to restore blood calcium levels",
        description:
          "If the levels of calcium in your blood drop too low, your doctor may recommend an infusion of calcium.",
      },
    ],
  },
  {
    name: "Kidney Stones",
    description:
      "Kidney stones (also called renal calculi, nephrolithiasis or urolithiasis) are hard deposits made of minerals and salts that form inside your kidneys. Passing kidney stones can be quite painful, but the stones usually cause no permanent damage if they're recognized in a timely fashion. Depending on your situation, you may need nothing more than to take pain medication and drink lots of water to pass a kidney stone. In other instances — for example, if stones become lodged in the urinary tract, are associated with a urinary infection or cause complications — surgery may be needed.",
    symptoms: [
      "Severe, sharp pain in the side and back, below the ribs",
      "Pain that radiates to the lower abdomen and groin",
      "Pain that comes in waves and fluctuates in intensity",
      "Pain or burning sensation while urinating",
      "Pink, red or brown uring",
      "Cloudy or foul-smelling urine",
      "Persistent need to urine, urinating more often than usual or urinating in small amounts",
      "Nausea and vomiting",
      "Fever and chills if an infection is present",
    ],
    causes: [
      {
        name: "Family or personal history",
        description:
          "If someone in your family has had kidney stones, you're more likely to develop stones, too. If you've already had one or more kidney stones, you're at increased risk of developing another.",
      },
      {
        name: "Dehydration",
        description:
          "Not drinking enough water each day can increase your risk of kidney stones. People who live in warm, dry climates and those who sweat a lot may be at higher risk than others.",
      },
      {
        name: "Certain diets",
        description:
          "Eating a diet that's high in protein, sodium (salt) and sugar may increase your risk of some types of kidney stones. This is especially true with a high-sodium diet. Too much salt in your diet increases the amount of calcium your kidneys must filter and significantly increases your risk of kidney stones.",
      },
      {
        name: "Obesity",
        description:
          "High body mass index (BMI), large waist size and weight gain have been linked to an increased risk of kidney stones.",
      },
      {
        name: "Digestive diseases and surgery",
        description:
          "Gastric bypass surgery, inflammatory bowel disease or chronic diarrhea can cause changes in the digestive process that affect your absorption of calcium and water, increasing the amounts of stone-forming substances in your urine.",
      },
      {
        name: "Certain supplements and medications",
        description:
          " Vitamin C, dietary supplements, laxatives (when used excessively), calcium-based antacids, and certain medications used to treat migraines or depression, can increase your risk of kidney stones.",
      },
    ],
    treatment: [
      {
        name: "Extracorporeal Shock Wave Lithotripsy (ESWL)",
        description:
          "ESWL uses sound waves to create strong vibrations (shock waves) that break the stones into tiny pieces that can be passed in your urine.",
      },
      {
        name: "Surgery to remove very large stones in the kidney",
        description:
          "A procedure called percutaneous nephrolithotomy (nef-row-lih-THOT-uh-me) involves surgically removing a kidney stone using small telescopes and instruments inserted through a small incision in your back.",
      },
      {
        name: "Using a scope to remove stones",
        description:
          "To remove a smaller stone in your ureter or kidney, your doctor may pass a thin lighted tube (ureteroscope) equipped with a camera through your urethra and bladder to your ureter.",
      },
    ],
  },
  {
    name: "Malaria",
    description:
      "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills. To reduce malaria infections, world health programs distribute preventive drugs and insecticide-treated bed nets to protect people from mosquito bites.",
    symptoms: [
      "Fever",
      "Chills",
      "General feeling of discomfort",
      "Headache",
      "Nausea and vomiting",
      "Diarrhea",
      "Abdominal pain",
      "Muscle or joint pain",
      "Fatigue",
      "Rapid breathing",
      "Rapid heart rate",
      "Cough",
    ],
    causes: [
      {
        name: "Parasite infection",
        description:
          "Malaria is caused by a single-celled parasite of the genus plasmodium. The parasite is transmitted to humans most commonly through mosquito bites.",
      },
    ],
    treatment: [
      {
        name: "Chloroquine phosphate",
        description:
          "Chloroquine is the preferred treatment for any parasite that is sensitive to the drug. But in many parts of the world, parasites are resistant to chloroquine, and the drug is no longer an effective treatment.",
      },
      {
        name: "Artemisinin-based combination therapies (ACTs)",
        description:
          "ACT is a combination of two or more drugs that work against the malaria parasite in different ways. This is usually the preferred treatment for chloroquine-resistant malaria. Examples include artemether-lumefantrine (Coartem) and artesunate-mefloquine.",
      },
    ],
  },
  {
    name: "Obesity",
    description:
      "Obesity is a complex disease involving an excessive amount of body fat. Obesity isn't just a cosmetic concern. It is a medical problem that increases your risk of other diseases and health problems, such as heart disease, diabetes, high blood pressure and certain cancers. There are many reasons why some people have difficulty avoiding obesity. Usually, obesity results from a combination of inherited factors, combined with the environment and personal diet and exercise choices.",
    symptoms: ["BMI value of 30 or higher"],
    causes: [
      {
        name: "Family inheritance and influences",
        description:
          "The genes you inherit from your parents may affect the amount of body fat you store, and where that fat is distributed. Genetics may also play a role in how efficiently your body converts food into energy, how your body regulates your appetite and how your body burns calories during exercise. Obesity tends to run in families. That's not just because of the genes they share. Family members also tend to share similar eating and activity habits.",
      },
      {
        name: "Unhealthy diet",
        description:
          "A diet that's high in calories, lacking in fruits and vegetables, full of fast food, and laden with high-calorie beverages and oversized portions contributes to weight gain.",
      },
      {
        name: "Liquid calories",
        description:
          "People can drink many calories without feeling full, especially calories from alcohol. Other high-calorie beverages, such as sugared soft drinks, can contribute to significant weight gain.",
      },
      {
        name: "Inactivity",
        description:
          "If you have a sedentary lifestyle, you can easily take in more calories every day than you burn through exercise and routine daily activities. Looking at computer, tablet and phone screens is a sedentary activity. The number of hours you spend in front of a screen is highly associated with weight gain.",
      },
      {
        name: "Lack of sleep",
        description:
          "Not getting enough sleep or getting too much sleep can cause changes in hormones that increase your appetite. You may also crave foods high in calories and carbohydrates, which can contribute to weight gain.",
      },
      {
        name: "Stress",
        description:
          "Many external factors that affect your mood and well-being may contribute to obesity. People often seek more high-calorie food when experiencing stressful situations.",
      },
      {
        name: "Pregnancy",
        description:
          "Weight gain is common during pregnancy. Some women find this weight difficult to lose after the baby is born. This weight gain may contribute to the development of obesity in women. Breast-feeding may be the best option to lose the weight gained during pregnancy.",
      },
    ],
    treatment: [
      {
        name: "Cutting calories",
        description:
          "The key to weight loss is reducing how many calories you take in. The first step is to review your typical eating and drinking habits to see how many calories you normally consume and where you can cut back. You and your doctor can decide how many calories you need to take in each day to lose weight, but a typical amount is 1,200 to 1,500 calories for women and 1,500 to 1,800 for men.",
      },
      {
        name: "Feeling full on less",
        description:
          "Some foods — such as desserts, candies, fats and processed foods — contain a large amount of calories for a small portion. In contrast, fruits and vegetables provide a larger portion size with fewer calories. By eating larger portions of foods that have fewer calories, you reduce hunger pangs, take in fewer calories and feel better about your meal, which contributes to how satisfied you feel overall.",
      },
      {
        name: "Meal replacements",
        description:
          " These plans suggest that you replace one or two meals with their products — such as low-calorie shakes or meal bars — and eat healthy snacks and a healthy, balanced third meal that's low in fat and calories. In the short term, this type of diet can help you lose weight. Keep in mind that these diets likely won't teach you how to change your overall lifestyle, though, so you may have to keep this up if you want to keep your weight off.",
      },
      {
        name: "Restricting certain foods",
        description:
          "Certain diets limit the amount of a particular food group, such as high-carbohydrate or full-fat foods. Ask your doctor which diet plans have been found effective and which might be helpful for you. Drinking sugar-sweetened beverages is a sure way to consume more calories than you intended, and limiting these drinks or eliminating them altogether is a good place to start cutting calories.",
      },
      {
        name: "Making healthier choices",
        description:
          "To make your overall diet healthier, eat more plant-based foods, such as fruits, vegetables and whole-grain carbohydrates. Also emphasize lean sources of protein — such as beans, lentils and soy — and lean meats. If you like fish, try to include fish twice a week. Limit salt and added sugar. Eat small amounts of fats, and make sure they come from heart-healthy sources, such as olive, canola and nut oils.",
      },
    ],
  },
  {
    name: "Hand, Food & Mouth Disease",
    description:
      "Hand-foot-and-mouth disease — a mild, contagious viral infection common in young children — is characterized by sores in the mouth and a rash on the hands and feet. Hand-foot-and-mouth disease is most commonly caused by a coxsackievirus.",
    symptoms: [
      "Fever",
      "Sore throat",
      "Feeling unwell",
      "Painful, red lesions on the tongue",
      "Red rash on the palms, soles, and sometimes the buttocks",
      "Irritability in infants and toddlers",
      "Loss of appetite",
    ],
    causes: [
      {
        name: "Oral ingestion",
        description:
          "Oral ingestion is the main source of coxsackievirus infection and hand-foot-and-mouth disease. The illness spreads by person-to-person contact with an infected person's nasal secretions or throat discharge, saliva, fluid from blisters, stool, and respiratory droplets sprayed into the air after a cough or sneeze.",
      },
    ],
    treatment: [
      {
        name: "Natural recovery",
        description:
          "There's no specific treatment for hand-foot-and-mouth disease. Signs and symptoms of hand-foot-and-mouth disease usually clear up in seven to 10 days. A topical oral anesthetic may help relieve the pain of mouth sores. Over-the-counter pain medications other than aspirin, such as acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin, others) may help relieve general discomfort.",
      },
    ],
  },
  {
    name: "Ringworm",
    description:
      "Ringworm is a rash caused by a fungal infection. It's usually a red, itchy, circular rash with clearer skin in the middle. Ringworm gets its name because of its appearance. No worm is involved. Ringworm often spreads by direct skin-to-skin contact with an infected person or animal.",
    symptoms: [
      "A scaly ring-shaped area, typically on the buttocks, trunk, arms, and legs",
      "A clear or scaly area inside the ring, perhaps with a scattering of red bumps",
      "Slightly raised, expanding rings",
      "A round, flat patch of itchy skin",
      "Overlapping rings",
    ],
    causes: [
      {
        name: "Human to human",
        description:
          "Ringworm often spreads by direct, skin-to-skin contact with an infected person.",
      },
      {
        name: "Animal to human",
        description:
          "You can contract ringworm by touching an animal with ringworm. Ringworm can spread while petting or grooming dogs or cats. It's also fairly common in cows.",
      },
      {
        name: "Object to human",
        description:
          "It's possible for ringworm to spread by contact with objects or surfaces that an infected person or animal has recently touched or rubbed against, such as clothing, towels, bedding and linens, combs, and brushes.",
      },
      {
        name: "Soil to human",
        description:
          "In rare cases, ringworm can be spread to humans by contact with infected soil. Infection would most likely occur only from prolonged contact with highly infected soil.",
      },
    ],
    treatment: [
      {
        name: "Antifungal medications",
        description:
          "Antifungal medications that can be taken by mouth are used to treat ringworm. The medications most commonly prescribed include griseofulvin (Gris-Peg) and terbinafine (Lamisil).",
      },
    ],
  },
  {
    name: "Osteoporosis",
    description:
      "Osteoporosis causes bones to become weak and brittle — so brittle that a fall or even mild stresses such as bending over or coughing can cause a fracture. Osteoporosis-related fractures most commonly occur in the hip, wrist or spine. Bone is living tissue that is constantly being broken down and replaced. Osteoporosis occurs when the creation of new bone doesn't keep up with the loss of old bone.",
    symptoms: [
      "Back pain, caused by a fractured or collapsed vertebra",
      "Loss of height over time",
      "A stooped posture",
      "A bone that breaks much more easily than expected",
    ],
    causes: [
      {
        name: "Age",
        description:
          "Your bones are in a constant state of renewal — new bone is made and old bone is broken down. When you're young, your body makes new bone faster than it breaks down old bone and your bone mass increases. After the early 20s this process slows, and most people reach their peak bone mass by age 30. As people age, bone mass is lost faster than it's created.",
      },
      {
        name: "Sex",
        description:
          "Women are much more likely to develop osteoporosis than are men.",
      },
      {
        name: "Age",
        description:
          "The older you get, the greater your risk of osteoporosis.",
      },
      {
        name: "Race",
        description:
          "You're at greatest risk of osteoporosis if you're white or of Asian descent.",
      },
      {
        name: "Family history",
        description:
          "Having a parent or sibling with osteoporosis puts you at greater risk, especially if your mother or father fractured a hip.",
      },
      {
        name: "Body frame size",
        description:
          "Men and women who have small body frames tend to have a higher risk because they might have less bone mass to draw from as they age.",
      },
    ],
    treatment: [
      {
        name: "Biophosphonates",
        description:
          "For both men and women at increased risk of fracture, the most widely prescribed osteoporosis medications are bisphosphonates. Intravenous forms of bisphosphonates don't cause stomach upset but can cause fever, headache and muscle aches for up to three days. It might be easier to schedule a quarterly or yearly injection than to remember to take a weekly or monthly pill, but it can be more costly to do so.",
      },
      {
        name: "Monoclonal antibody medications",
        description:
          "Compared with bisphosphonates, denosumab (Prolia, Xgeva) produces similar or better bone density results and reduces the chance of all types of fractures. Denosumab is delivered via a shot under the skin every six months. If you take denosumab, you might have to continue to do so indefinitely. Recent research indicates there could be a high risk of spinal column fractures after stopping the drug.",
      },
      {
        name: "Hormone-related therapy",
        description:
          "Estrogen, especially when started soon after menopause, can help maintain bone density. However, estrogen therapy can increase the risk of blood clots, endometrial cancer, breast cancer and possibly heart disease. Therefore, estrogen is typically used for bone health in younger women or in women whose menopausal symptoms also require treatment. In men, osteoporosis might be linked with a gradual age-related decline in testosterone levels. Testosterone replacement therapy can help improve symptoms of low testosterone, but osteoporosis medications have been better studied in men to treat osteoporosis and thus are recommended alone or in addition to testosterone.",
      },
      {
        name: "Teriparatide (Forteo)",
        description:
          "This powerful drug is similar to parathyroid hormone and stimulates new bone growth. It's given by daily injection under the skin. After two years of treatment with teriparatide, another osteoporosis drug is taken to maintain the new bone growth.",
      },
      {
        name: "Romosozumab (Evenity)",
        description:
          "This is the newest bone-building medication to treat osteoporosis. It is given as an injection every month at your doctor's office. It is limited to one year of treatment, followed by other osteoporosis medications.",
      },
    ],
  },
  {
    name: "Migraine",
    description:
      "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days, and the pain can be so severe that it interferes with your daily activities.",
    symptoms: [
      "Constipation",
      "Mood changes",
      "Food cravings",
      "Neck stiffness",
      "Increased urination",
      "Fluid retention",
      "Frequent yawning",
      "Vision loss",
      "Visual phenomena",
      "Pins and needles sensations in an arm or leg",
      "Difficulty speaking",
    ],
    causes: [
      {
        name: "Hormonal changes in women",
        description:
          "Fluctuations in estrogen, such as before or during menstrual periods, pregnancy and menopause, seem to trigger headaches in many women. Hormonal medications, such as oral contraceptives, also can worsen migraines. Some women, however, find that their migraines occur less often when taking these medications.",
      },
      {
        name: "Drinks",
        description:
          "These include alcohol, especially wine, and too much caffeine, such as coffee.",
      },
      {
        name: "Stress",
        description: "Stress at work or home can cause migraines.",
      },
      {
        name: "Sensory stimuli",
        description:
          "Bright or flashing lights can induce migraines, as can loud sounds. Strong smells — such as perfume, paint thinner, secondhand smoke and others — trigger migraines in some people.",
      },
      {
        name: "Sleep changes",
        description:
          "Missing sleep or getting too much sleep can trigger migraines in some people.",
      },
      {
        name: "Physical factors",
        description:
          "Intense physical exertion, including sexual activity, might provoke migraines.",
      },
      {
        name: "Weather changes",
        description:
          " A change of weather or barometric pressure can prompt a migraine.",
      },
      {
        name: "Medications",
        description:
          "Oral contraceptives and vasodilators, such as nitroglycerin, can aggravate migraines.",
      },
      {
        name: "Foods",
        description:
          "Aged cheeses and salty and processed foods might trigger migraines. So might skipping meals.",
      },
      {
        name: "Food additives",
        description:
          "These include the sweetener aspartame and the preservative monosodium glutamate (MSG), found in many foods.",
      },
    ],
    treatment: [
      {
        name: "Pain relievers",
        description:
          "These over-the-counter or prescription pain relievers include aspirin or ibuprofen (Advil, Motrin IB, others). When taken too long, these might cause medication-overuse headaches, and possibly ulcers and bleeding in the gastrointestinal tract. Migraine relief medications that combine caffeine, aspirin and acetaminophen (Excedrin Migraine) may be helpful, but usually only against mild migraine pain.",
      },
      {
        name: "Triptans",
        description:
          "Prescription drugs such as sumatriptan (Imitrex, Tosymra) and rizatriptan (Maxalt, Maxalt-MLT) are used to treat migraine because they block pain pathways in the brain. Taken as pills, shots or nasal sprays, they can relieve many symptoms of migraine. They might not be safe for those at risk of a stroke or heart attack.",
      },
      {
        name: "Dihydroergotamine (D.H.E. 45, Migranal)",
        description:
          "Available as a nasal spray or injection, this drug is most effective when taken shortly after the start of migraine symptoms for migraines that tend to last longer than 24 hours. Side effects can include worsening of migraine-related vomiting and nausea.",
      },
      {
        name: "Lasmiditan (Reyvow)",
        description:
          "This newer oral tablet is approved for the treatment of migraine with or without aura. In drug trials, lasmiditan significantly improved headache pain. Lasmiditan can have a sedative effect and cause dizziness, so people taking it are advised not to drive or operate machinery for at least eight hours.",
      },
      {
        name: "Ubrogepant (Ubrelvy)",
        description:
          "This oral calcitonin gene-related peptide receptor antagonist is approved for the treatment of acute migraine with or without aura in adults. It's the first drug of this type approved for migraine treatment. In drug trials, ubrogepant was more effective than placebo in relieving pain and other migraine symptoms such as nausea and sensitivity to light and sound two hours after taking it. Common side effects include dry mouth, nausea and excessive sleepiness. Ubrogepant should not be taken with strong CYP3A4 inhibitor drugs.",
      },
      {
        name: "Anti-nausea drugs",
        description:
          "These can help if your migraine with aura is accompanied by nausea and vomiting. Anti-nausea drugs include chlorpromazine, metoclopramide (Reglan) or prochlorperazine (Compro). These are usually taken with pain medications.",
      },
      {
        name: "Antidepressants",
        description:
          "A tricyclic antidepressant (amitriptyline) can prevent migraines. Because of the side effects of amitriptyline, such as sleepiness, other antidepressants might be prescribed instead.",
      },
      {
        name: "Anti-seizure drugs",
        description:
          "Valproate and topiramate (Topamax, Qudexy XR, others) might help if you have less frequent migraines, but can cause side effects such as dizziness, weight changes, nausea and more. These medications are not recommended for pregnant women or women trying to get pregnant.",
      },
    ],
  },
  {
    name: "Mental Illness",
    description:
      "Mental illness, also called mental health disorders, refers to a wide range of mental health conditions — disorders that affect your mood, thinking and behavior. Examples of mental illness include depression, anxiety disorders, schizophrenia, eating disorders and addictive behaviors. A mental illness can make you miserable and can cause problems in your daily life, such as at school or work or in relationships. In most cases, symptoms can be managed with a combination of medications and talk therapy (psychotherapy).",
    symptoms: [
      "Feeling sad or down",
      "Confused thinking or reduced ability to concentrate",
      "Excessive fears or worries",
      "Extreme mood changes of highs and lows",
      "Withdrawal from friends and activities",
      "Significant tiredness",
      "Detachment from reality",
      "Inability to cope with daily problems or stress",
      "Problems with alcohol or drug use",
      "Sex drive changes",
      "Major changes in eating habits",
      "Suicidal thinking",
    ],
    causes: [
      {
        name: "Inherited traits",
        description:
          "Mental illness is more common in people whose blood relatives also have a mental illness. Certain genes may increase your risk of developing a mental illness, and your life situation may trigger it.",
      },
      {
        name: "Environmental exposures before birth",
        description:
          "Exposure to environmental stressors, inflammatory conditions, toxins, alcohol or drugs while in the womb can sometimes be linked to mental illness.",
      },
      {
        name: "Brain chemistry",
        description:
          "Neurotransmitters are naturally occurring brain chemicals that carry signals to other parts of your brain and body. When the neural networks involving these chemicals are impaired, the function of nerve receptors and nerve systems change, leading to depression and other emotional disorders.",
      },
    ],
    treatment: [
      {
        name: "Antidepressants",
        description:
          "Antidepressants are used to treat depression, anxiety and sometimes other conditions. They can help improve symptoms such as sadness, hopelessness, lack of energy, difficulty concentrating and lack of interest in activities. Antidepressants are not addictive and do not cause dependency.",
      },
      {
        name: "Anti-anxiety medications",
        description:
          "These drugs are used to treat anxiety disorders, such as generalized anxiety disorder or panic disorder. They may also help reduce agitation and insomnia. Long-term anti-anxiety drugs typically are antidepressants that also work for anxiety. Fast-acting anti-anxiety drugs help with short-term relief, but they also have the potential to cause dependency, so ideally they'd be used short term.",
      },
      {
        name: "Mood-stabilizing medications",
        description:
          "Mood stabilizers are most commonly used to treat bipolar disorders, which involves alternating episodes of mania and depression. Sometimes mood stabilizers are used with antidepressants to treat depression.",
      },
      {
        name: "Antipsychotic medications",
        description:
          "Antipsychotic drugs are typically used to treat psychotic disorders, such as schizophrenia. Antipsychotic medications may also be used to treat bipolar disorders or used with antidepressants to treat depression.",
      },
      {
        name: "Avoid alcohol and drug use",
        description:
          "Using alcohol or recreational drugs can make it difficult to treat a mental illness. If you're addicted, quitting can be a real challenge. If you can't quit on your own, see your doctor or find a support group to help you.",
      },
      {
        name: "Stay active",
        description:
          "Exercise can help you manage symptoms of depression, stress and anxiety. Physical activity can also counteract the effects of some psychiatric medications that may cause weight gain. Consider walking, swimming, gardening or any form of physical activity that you enjoy. Even light physical activity can make a difference.",
      },
      {
        name: "Determine priorities",
        description:
          "You may reduce the impact of your mental illness by managing time and energy. Cut back on obligations when necessary and set reasonable goals. Give yourself permission to do less when symptoms are worse. You may find it helpful to make a list of daily tasks or use a planner to structure your time and stay organized.",
      },
    ],
  },
  {
    name: "Insomnia",
    description:
      "Insomnia is a common sleep disorder that can make it hard to fall asleep, hard to stay asleep, or cause you to wake up too early and not be able to get back to sleep. You may still feel tired when you wake up. Insomnia can sap not only your energy level and mood but also your health, work performance and quality of life. At some point, many adults experience short-term (acute) insomnia, which lasts for days or weeks. It's usually the result of stress or a traumatic event. But some people have long-term (chronic) insomnia that lasts for a month or more. Insomnia may be the primary problem, or it may be associated with other medical conditions or medications. You don't have to put up with sleepless nights. Simple changes in your daily habits can often help.",
    symptoms: [
      "Difficulty falling asleep at night",
      "Waking up during the night",
      "Waking up too early",
      "Not feeling well-rested after a nights sleep",
      "Daytime tiredness or sleepiness",
      "Irritability, depression or anxiety",
      "Increased errors or accidents",
      "Ongoing worries about sleep",
    ],
    causes: [
      {
        name: "Stress",
        description:
          "Concerns about work, school, health, finances or family can keep your mind active at night, making it difficult to sleep. Stressful life events or trauma — such as the death or illness of a loved one, divorce, or a job loss — also may lead to insomnia.",
      },
      {
        name: "Travel or work schedule",
        description:
          "Your circadian rhythms act as an internal clock, guiding such things as your sleep-wake cycle, metabolism and body temperature. Disrupting your body's circadian rhythms can lead to insomnia. Causes include jet lag from traveling across multiple time zones, working a late or early shift, or frequently changing shifts.",
      },
      {
        name: "Poor sleep habits",
        description:
          "Poor sleep habits include an irregular bedtime schedule, naps, stimulating activities before bed, an uncomfortable sleep environment, and using your bed for work, eating or watching TV. Computers, TVs, video games, smartphones or other screens just before bed can interfere with your sleep cycle.",
      },
      {
        name: "Eating too much late in the evening",
        description:
          "Having a light snack before bedtime is OK, but eating too much may cause you to feel physically uncomfortable while lying down. Many people also experience heartburn, a backflow of acid and food from the stomach into the esophagus after eating, which may keep you awake.",
      },
    ],
    treatment: [
      {
        name: "Stimulus control therapy",
        description:
          "This method helps remove factors that condition your mind to resist sleep. For example, you might be coached to set a consistent bedtime and wake time and avoid naps, use the bed only for sleep and sex, and leave the bedroom if you can't go to sleep within 20 minutes, only returning when you're sleepy.",
      },
      {
        name: "Relaxation techniques",
        description:
          "Progressive muscle relaxation, biofeedback and breathing exercises are ways to reduce anxiety at bedtime. Practicing these techniques can help you control your breathing, heart rate, muscle tension and mood so that you can relax.",
      },
      {
        name: "Sleep restriction",
        description:
          "This therapy decreases the time you spend in bed and avoids daytime naps, causing partial sleep deprivation, which makes you more tired the next night. Once your sleep has improved, your time in bed is gradually increased.",
      },
      {
        name: "Remaining passively awake",
        description:
          "Also called paradoxical intention, this therapy for learned insomnia is aimed at reducing the worry and anxiety about being able to get to sleep by getting in bed and trying to stay awake rather than expecting to fall asleep.",
      },
      {
        name: "Light therapy",
        description:
          "If you fall asleep too early and then awaken too early, you can use light to push back your internal clock. You can go outside during times of the year when it's light outside in the evenings, or you can use a light box. Talk to your doctor about recommendations.",
      },
    ],
  },
  {
    name: "Pharyngitis (Sore throat)",
    description:
      "A sore throat is pain, scratchiness or irritation of the throat that often worsens when you swallow. The most common cause of a sore throat (pharyngitis) is a viral infection, such as a cold or the flu. A sore throat caused by a virus resolves on its own. Strep throat (streptococcal infection), a less common type of sore throat caused by bacteria, requires treatment with antibiotics to prevent complications. Other less common causes of sore throat might require more complex treatment.",
    symptoms: [
      "Pain or a scratchy sensation in the throat",
      "Pain that worsens with swallowing or talking",
      "Difficulty swallowing",
      "Sore, swollen glands in your neck or jaw",
      "Swollen, red tonsils",
      "White patches or pus on your tonsils",
      "A hoarse or muffled voice",
      "Fever",
      "Cough",
      "Runny nose",
      "Sneezing",
      "Body aches",
    ],
    causes: [
      {
        name: "Viral infections",
        description:
          "Viral illnesses that cause a sore throat include common cold, flu, mono, measles, chickenpox, coronavirus disease 2019, croup",
      },
      {
        name: "Bacterial infections",
        description:
          "Many bacterial infections can cause a sore throat. The most common is Streptococcus pyogenes (group A streptococcus) which causes strep throat.",
      },
      {
        name: "Allergies",
        description:
          "Allergies to pet dander, molds, dust and pollen can cause a sore throat. The problem may be complicated by postnasal drip, which can irritate and inflame the throat.",
      },
      {
        name: "Dryness",
        description:
          "Dry indoor air can make your throat feel rough and scratchy. Breathing through your mouth — often because of chronic nasal congestion — also can cause a dry, sore throat.",
      },
      {
        name: "Irritants",
        description:
          "Outdoor air pollution and indoor pollution such as tobacco smoke or chemicals can cause a chronic sore throat. Chewing tobacco, drinking alcohol and eating spicy foods also can irritate your throat.",
      },
      {
        name: "Muscle strain",
        description:
          "You can strain muscles in your throat by yelling, talking loudly or talking for long periods without rest.",
      },
      {
        name: "Tumors",
        description:
          "Cancerous tumors of the throat, tongue or voice box (larynx) can cause a sore throat. Other signs or symptoms may include hoarseness, difficulty swallowing, noisy breathing, a lump in the neck, and blood in saliva or phlegm.",
      },
    ],
    treatment: [
      {
        name: "Natural recovery",
        description:
          "A sore throat caused by a viral infection usually lasts five to seven days and doesn't usually require medical treatment. Antibiotics don't help treat a viral infection. To ease pain and fever, many people turn to acetaminophen (Tylenol, others) or other mild pain relievers.",
      },
    ],
  },
  {
    name: "Piles (Haemorrhoids)",
    description:
      "Hemorrhoids (HEM-uh-roids), also called piles, are swollen veins in your anus and lower rectum, similar to varicose veins. Hemorrhoids can develop inside the rectum (internal hemorrhoids) or under the skin around the anus (external hemorrhoids). Nearly three out of four adults will have hemorrhoids from time to time. Hemorrhoids have a number of causes, but often the cause is unknown.",
    symptoms: [
      "Itching or irritation in your anal region",
      "Pain or discomfort",
      "Swelling around your anus",
      "Bleeding",
    ],
    causes: [
      {
        name: "Increased pressure in the lower rectum",
        description:
          "The veins around your anus tend to stretch under pressure and may bulge or swell. Hemorrhoids can develop from increased pressure in the lower rectum due to straining during bowel movements, sitting for long periods of time on the toilet, having chronic diarrhea or constipation, being obese, and regular heavy lifting",
      },
      {
        name: "Age",
        description:
          "As you age, your risk of hemorrhoids increases. That's because the tissues that support the veins in your rectum and anus can weaken and stretch. This can also happen when you're pregnant, because the baby's weight puts pressure on the anal region.",
      },
    ],
    treatment: [
      {
        name: "Eat high-fiber foods",
        description:
          "Eat more fruits, vegetables and whole grains. Doing so softens the stool and increases its bulk, which will help you avoid the straining that can worsen symptoms from existing hemorrhoids. Add fiber to your diet slowly to avoid problems with gas.",
      },
      {
        name: "Use topical treatments",
        description:
          "Apply an over-the-counter hemorrhoid cream or suppository containing hydrocortisone, or use pads containing witch hazel or a numbing agent.",
      },
      {
        name: "Soak regularly in a warm bath or sitz bath",
        description:
          "Soak your anal area in plain warm water for 10 to 15 minutes two to three times a day. A sitz bath fits over the toilet.",
      },
      {
        name: "Take oral pain relievers",
        description:
          "You can use acetaminophen (Tylenol, others), aspirin or ibuprofen (Advil, Motrin IB, others) temporarily to help relieve your discomfort.",
      },
      {
        name: "Rubber band ligation",
        description:
          "Your doctor places one or two tiny rubber bands around the base of an internal hemorrhoid to cut off its circulation. The hemorrhoid withers and falls off within a week.",
      },
      {
        name: "Injection (sclerotherapy)",
        description:
          "Your doctor injects a chemical solution into the hemorrhoid tissue to shrink it. While the injection causes little or no pain, it might be less effective than rubber band ligation.",
      },
      {
        name: "Coagulation (infrared, laser or bipolar)",
        description:
          "Coagulation techniques use laser or infrared light or heat. They cause small, bleeding internal hemorrhoids to harden and shrivel. Coagulation has few side effects and usually causes little discomfort.",
      },
    ],
  },
  {
    name: "Strep Throat",
    description:
      "Strep throat is a bacterial infection that can make your throat feel sore and scratchy. Strep throat accounts for only a small portion of sore throats. If untreated, strep throat can cause complications, such as kidney inflammation or rheumatic fever. Rheumatic fever can lead to painful and inflamed joints, a specific type of rash, or heart valve damage.",
    symptoms: [
      "Throat pain that usually comes on quickly",
      "Painful swallowing",
      "Red and swollen tonsils, sometimes with white patches or streaks of pus",
      "Tiny red spots on the area at the back of the roof of the mouth",
      "Swollen, tender lymph nodes in your neck",
      "Fever",
      "Headache",
      "Rash",
      "Nausea or vomiting",
      "Body aches",
    ],
    causes: [
      {
        name: "Bacteria Infection",
        description:
          "Strep throat is caused by infection with a bacterium known as Streptococcus pyogenes, also called group A streptococcus. Streptococcal bacteria are contagious. They can spread through droplets when someone with the infection coughs or sneezes, or through shared food or drinks. You can also pick up the bacteria from a doorknob or other surface and transfer them to your nose, mouth or eyes.",
      },
    ],
    treatment: [
      {
        name: "Antibiotics",
        description:
          "If your doctor diagnoses you with strep throat, your doctor will likely prescribe an oral antibiotic. If taken within 48 hours of the onset of the illness, antibiotics reduce the duration and severity of symptoms, as well as the risk of complications and the likelihood that infection will spread to others. With treatment, you should start feeling better in a day or two.",
      },
      {
        name: "Symptom relievers",
        description:
          "To relieve throat pain and reduce fever, try over-the-counter pain relievers, such as ibuprofen (Advil, Motrin IB, others) or acetaminophen (Tylenol, others).",
      },
    ],
  },
  {
    name: "Sinus Headaches",
    description:
      "Sinus headaches are headaches that may feel like an infection in the sinuses (sinusitis). You may feel pressure around your eyes, cheeks and forehead. Perhaps your head throbs. However, many people who assume they have headaches from sinusitis, including many who have received such a diagnosis, actually have migraines.",
    symptoms: [
      "Pain, pressure and fullness in your cheeks, brow or forehead",
      "Worsening pain if you bend forward or lie down",
      "Stuffy nose",
      "Fatigue",
      "Achy feeling in your upper teeth",
    ],
    causes: [
      {
        name: "Headaches",
        description:
          "Sinus headaches are usually associated with migraines or other forms of headaches. Sinus headaches are associated with pain and pressure in the face and sinuses and can cause nasal symptoms. Most of these headaches are not caused by sinus infections and should not be treated with antibiotics.",
      },
    ],
    treatment: [
      {
        name: "Over-the-counter pain relievers",
        description:
          "Migraines and other types of headaches may be treated with over-the-counter medications, such as acetaminophen (Tylenol, others), naproxen sodium (Aleve) and ibuprofen (Advil, Motrin IB).",
      },
      {
        name: "Triptans",
        description:
          "Many people with migraine attacks use triptans to relieve pain. Triptans work by promoting constriction of blood vessels and blocking pain pathways in the brain. Medications include sumatriptan (Imitrex, Tosymra, others), rizatriptan (Maxalt), almotriptan, naratriptan (Amerge), zolmitriptan (Zomig), frovatriptan (Frova) and eletriptan (Relpax). Triptans are available as tablets, nasal sprays and injections.",
      },
      {
        name: "Ergots",
        description:
          "Ergotamine and caffeine combination drugs (Migergot, Cafergot) are less effective than triptans. Ergots seem most effective in those whose pain lasts for more than 72 hours. Ergotamine may cause worsened nausea and vomiting related to your migraines and other side effects, and it may also lead to medication-overuse headaches.",
      },
      {
        name: "Anti-nausea medications",
        description:
          "Because migraines are often accompanied by nausea, with or without vomiting, medication for nausea is appropriate and is usually combined with other medications. Frequently prescribed medications are chlorpromazine, metoclopramide (Reglan) or prochlorperazine (Compazine).",
      },
      {
        name: "Glucocorticoids (dexamethasone)",
        description:
          "A glucocorticoid may be used in conjunction with other medications to improve pain relief. Because of the risk of steroid toxicity, glucocorticoids shouldn't be used frequently.",
      },
    ],
  },
  {
    name: "Stroke",
    description:
      "A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. A stroke is a medical emergency, and prompt treatment is crucial. Early action can reduce brain damage and other complications.",
    symptoms: [
      "Trouble speaking and understanding what others are saying",
      "Paralysis or numbness of the face, arm or leg",
      "Problems seeing in one or both eyes",
      "Headache",
      "Trouble walking",
    ],
    causes: [
      {
        name: "Blocked blood vessels in the brain",
        description:
          "It happens when the brain's blood vessels become narrowed or blocked, causing severely reduced blood flow (ischemia). Blocked or narrowed blood vessels are caused by fatty deposits that build up in blood vessels or by blood clots or other debris that travel through your bloodstream and lodge in the blood vessels in your brain.",
      },
      {
        name: "Blood vessel in your brain leaks or ruptures",
        description:
          "Brain hemorrhages can result from many conditions that affect your blood vessels. Factors related to hemorrhagic stroke include uncontrolled high blood pressure, overtreatment with blood thinners, bulges at weak spots in your blood vessel walls, trauma, and ischemic stroke leading to hemorrhage",
      },
    ],
    treatment: [
      {
        name: "Emergency IV medication",
        description:
          "Therapy with drugs that can break up a clot has to be given within 4.5 hours from when symptoms first started if given intravenously. The sooner these drugs are given, the better. Quick treatment not only improves your chances of survival but also may reduce complications. This drug restores blood flow by dissolving the blood clot causing your stroke. By quickly removing the cause of the stroke, it may help people recover more fully from a stroke.",
      },
      {
        name: "Medications delivered directly to the brain",
        description:
          "Doctors insert a long, thin tube (catheter) through an artery in your groin and thread it to your brain to deliver tissue plasminogen activator directly where the stroke is happening. The time window for this treatment is somewhat longer than for injected tissue plasminogen activator, but is still limited.",
      },
      {
        name: "Removing the clot with a stent retriever",
        description:
          "Doctors can use a device attached to a catheter to directly remove the clot from the blocked blood vessel in your brain. This procedure is particularly beneficial for people with large clots that can't be completely dissolved with tissue plasminogen activator. This procedure is often performed in combination with injected tissue plasminogen activator.",
      },
      {
        name: "Carotid endarterectomy",
        description:
          "Carotid arteries are the blood vessels that run along each side of your neck, supplying your brain (carotid arteries) with blood. This surgery removes the plaque blocking a carotid artery, and may reduce your risk of ischemic stroke. A carotid endarterectomy also involves risks, especially for people with heart disease or other medical conditions.",
      },
      {
        name: "Angioplasty and stents",
        description:
          "In an angioplasty, a surgeon threads a catheter to your carotid arteries through an artery in your groin. A balloon is then inflated to expand the narrowed artery. Then a stent can be inserted to support the opened artery.",
      },
      {
        name: "Surgery",
        description:
          "If the area of bleeding is large, your doctor may perform surgery to remove the blood and relieve pressure on your brain. Surgery may also be used to repair blood vessel problems associated with hemorrhagic strokes. Your doctor may recommend one of these procedures after a stroke or if an aneurysm, arteriovenous malformation (AVM) or other type of blood vessel problem caused your hemorrhagic stroke",
      },
      {
        name: "Surgical clipping",
        description:
          "A surgeon places a tiny clamp at the base of the aneurysm, to stop blood flow to it. This clamp can keep the aneurysm from bursting, or it can keep an aneurysm that has recently hemorrhaged from bleeding again.",
      },
      {
        name: "Stereotactic radiosurgery",
        description:
          "Using multiple beams of highly focused radiation, stereotactic radiosurgery is an advanced minimally invasive treatment used to repair blood vessel malformations.",
      },
    ],
  },
  {
    name: "Tuberculosis",
    description:
      "Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from person to person through tiny droplets released into the air via coughs and sneezes. Many tuberculosis strains resist the drugs most used to treat the disease. People with active tuberculosis must take many types of medications for months to get rid of the infection and prevent antibiotic resistance.",
    symptoms: [
      "Coughing for three or more weeks",
      "Coughing up blood or mucus",
      "Chest pain, or pain with breathing or coughing",
      "Unintentional weight loss",
      "Fatigue",
      "Fever",
      "Night sweats",
      "Chills",
      "Loss of appetite",
    ],
    causes: [
      {
        name: "Bacteria infection",
        description:
          "Tuberculosis (TB) is caused by a type of bacterium called Mycobacterium tuberculosis. It's spread when a person with active TB disease in their lungs coughs or sneezes and someone else inhales the expelled droplets, which contain TB bacteria.",
      },
    ],
    treatment: [
      {
        name: "Antibiotics",
        description:
          "You'll be prescribed at least a 6-month course of a combination of antibiotics if you're diagnosed with active pulmonary TB, where your lungs are affected and you have symptoms. It may be several weeks before you start to feel better. The exact length of time will depend on your overall health and the severity of your TB.",
      },
    ],
  },
  {
    name: "Thalassemia",
    description:
      "Thalassemia is an inherited blood disorder that causes your body to have less hemoglobin than normal. Hemoglobin enables red blood cells to carry oxygen. Thalassemia can cause anemia, leaving you fatigued. If you have mild thalassemia, you might not need treatment. But more severe forms might require regular blood transfusions. You can take steps to cope with fatigue, such as choosing a healthy diet and exercising regularly.",
    symptoms: [
      "Fatigue",
      "Weakness",
      "Pale or yellowish skin",
      "Facial bone deformities",
      "Slow growth",
      "Abdominal swelling",
      "Dark urine",
    ],
    causes: [
      {
        name: "DNA mutation",
        description:
          "Thalassemia is caused by mutations in the DNA of cells that make hemoglobin — the substance in red blood cells that carries oxygen throughout your body. The mutations associated with thalassemia are passed from parents to children. In alpha-thalassemia, the severity of thalassemia you have depends on the number of gene mutations you inherit from your parents. The more mutated genes, the more severe your thalassemia. In beta-thalassemia, the severity of thalassemia you have depends on which part of the hemoglobin molecule is affected.",
      },
      {
        name: "Family history of thalassemia",
        description:
          "Thalassemia is passed from parents to children through mutated hemoglobin genes.",
      },
      {
        name: "Certain ancestry",
        description:
          "Thalassemia occurs most often in African Americans and in people of Mediterranean and Southeast Asian descent.",
      },
    ],
    treatment: [
      {
        name: "Frequent blood transfusions",
        description:
          "More severe forms of thalassemia often require frequent blood transfusions, possibly every few weeks. Over time, blood transfusions cause a buildup of iron in your blood, which can damage your heart, liver and other organs.",
      },
      {
        name: "Chelation therapy",
        description:
          "This is treatment to remove excess iron from your blood. Iron can build up as a result of regular transfusions. Some people with thalassemia who don't have regular transfusions can also develop excess iron. Removing the excess iron is vital for your health.",
      },
      {
        name: "Stem cell transplant",
        description:
          "Also called a bone marrow transplant, a stem cell transplant might be an option in some cases. For children with severe thalassemia, it can eliminate the need for lifelong blood transfusions and drugs to control iron overload. This procedure involves receiving infusions of stem cells from a compatible donor, usually a sibling.",
      },
    ],
  },
  {
    name: "Urinary Tract Infection (UTI)",
    description:
      "A urinary tract infection (UTI) is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra. Women are at greater risk of developing a UTI than are men. Infection limited to your bladder can be painful and annoying. However, serious consequences can occur if a UTI spreads to your kidneys.",
    symptoms: [
      "A strong, persistent urge to urinate",
      "A burning sensation when urinating",
      "Passing frequent small amounts of urine",
      "Urine that appears cloudy",
      "Urine that appears red, bright pink or cola-colored",
      "Strong-smelling urine",
      "Pelvic pain",
    ],
    causes: [
      {
        name: "Infection of the bladder (cystitis)",
        description:
          "This type of UTI is usually caused by Escherichia coli (E. coli), a type of bacteria commonly found in the gastrointestinal (GI) tract. However, sometimes other bacteria are responsible. Sexual intercourse may lead to cystitis, but you don't have to be sexually active to develop it. All women are at risk of cystitis because of their anatomy — specifically, the short distance from the urethra to the anus and the urethral opening to the bladder.",
      },
      {
        name: "Infection of the urethra (urethritis)",
        description:
          "This type of UTI can occur when GI bacteria spread from the anus to the urethra. Also, because the female urethra is close to the vagina, sexually transmitted infections, such as herpes, gonorrhea, chlamydia and mycoplasma, can cause urethritis.",
      },
      {
        name: "Urinary tract abnormalities",
        description:
          "Babies born with urinary tract abnormalities that don't allow urine to leave the body normally or cause urine to back up in the urethra have an increased risk of UTIs.",
      },
      {
        name: "Blockages in the urinary tract",
        description:
          " Kidney stones or an enlarged prostate can trap urine in the bladder and increase the risk of UTIs.",
      },
      {
        name: "A suppressed immune system",
        description:
          "Diabetes and other diseases that impair the immune system — the body's defense against germs — can increase the risk of UTIs.",
      },
      {
        name: "Catheter use",
        description:
          "People who can't urinate on their own and use a tube (catheter) to urinate have an increased risk of UTIs. This may include people who are hospitalized, people with neurological problems that make it difficult to control their ability to urinate and people who are paralyzed.",
      },
    ],
    treatment: [
      {
        name: "Antibiotic perscription",
        description:
          "Antibiotics usually are the first line treatment for urinary tract infections. Which drugs are prescribed and for how long depend on your health condition and the type of bacteria found in your urine. Drugs commonly recommended for simple UTIs include Trimethoprim/sulfamethoxazole, Fosfomycin, Nitrofurantoin, Cephalexin, and Ceftriaxone",
      },
    ],
  },
  {
    name: "Zika Virus",
    description:
      "The Zika virus is most often spread to people through mosquito bites, primarily in tropical and subtropical areas of the world. Most people infected with the Zika virus have no signs and symptoms. Some people have mild fever, rash and muscle pain. In rare cases, the Zika virus may cause brain or nervous system complications, such as Guillain-Barre syndrome, even in people who never show symptoms of infection. Infection with the Zika virus is also called Zika, Zika fever or Zika virus disease.",
    symptoms: [
      "Mild fever",
      "Rash",
      "Joint pain",
      "Red eyes",
      "Muscle pain",
      "Headache",
      "Eye pain",
      "Fatigue or a general feeling of discomfort",
      "Abdominal pain",
    ],
    causes: [
      {
        name: "Infected mosquito",
        description:
          "The Zika virus is most often spread to a person through the bite of an infected mosquito. The mosquitoes that are known to carry the virus include two aedes species mosquitoes, which can be found throughout the world. When a mosquito bites a person who is already infected with the Zika virus, the virus infects the mosquito. Then, when the infected mosquito bites another person, the virus enters that person's bloodstream and causes an infection. During pregnancy, the Zika virus can also spread from a mother to the fetus. The virus can also spread from one person to another through sexual contact. In some cases, people contract the virus through blood transfusion or organ donation.",
      },
      {
        name: "Having unprotected sex",
        description:
          "The Zika virus can spread from one person to another through sex. Having unprotected sex can increase the risk of Zika virus infection for up to three months after travel. For this reason, pregnant women whose sex partners recently lived in or traveled to an area where Zika virus is common should use a condom during sexual activity or abstain from sexual activity until the baby is born. All other couples can also reduce the risk of sexual transmission by using a condom or abstaining from sexual activity for up to three months after travel.",
      },
    ],
    treatment: [
      {
        name: "Natural recovery",
        description:
          "There is no specific treatment for infection with the Zika virus. To help relieve symptoms, get plenty of rest and drink plenty of fluids to prevent dehydration. The over-the-counter (OTC) medication acetaminophen (Tylenol, others) may help relieve joint pain and fever. The symptoms of Zika virus infection are similar to other mosquito-borne illnesses, such as dengue fever. If you're feeling ill after recent travel to an area where mosquito-borne illness is common, see your doctor. Don't take ibuprofen (Advil, Motrin IB, others), naproxen sodium (Aleve) or aspirin until your doctor has ruled out dengue fever. These medications can increase the risk of serious complications from dengue fever.",
      },
    ],
  },
  {
    name: "Hepatitis C",
    description:
      "Hepatitis C is a viral infection that causes liver inflammation, sometimes leading to serious liver damage. The hepatitis C virus (HCV) spreads through contaminated blood. Until recently, hepatitis C treatment required weekly injections and oral medications that many HCV-infected people couldn't take because of other health problems or unacceptable side effects.",
    symptoms: [
      "Bleeding easily",
      "Bruising easily",
      "Fatigue",
      "Poor appetite",
      "Yellow discoloration of the skin and eyes",
      "Dark-colored urine",
      "Itchy skin",
      "Fluid buildup in your abdomen",
      "Swelling in your legs",
      "Weight loss",
      "Confusion, drowsiness and slurred speech",
      "Spiderlike blood vessels on your skin",
    ],
    causes: [
      {
        name: "Hepatitis C virus",
        description:
          "Hepatitis C infection is caused by the hepatitis C virus (HCV). The infection spreads when blood contaminated with the virus enters the bloodstream of an uninfected person. Globally, HCV exists in several distinct forms, known as genotypes. Seven distinct HCV genotypes and more than 67 subtypes have been identified. The most common HCV genotype in the United States is type 1. Although chronic hepatitis C follows a similar course regardless of the genotype of the infecting virus, treatment recommendations vary depending on viral genotype.",
      },
    ],
    treatment: [
      {
        name: "Antiviral medications",
        description:
          "Hepatitis C infection is treated with antiviral medications intended to clear the virus from your body. The goal of treatment is to have no hepatitis C virus detected in your body at least 12 weeks after you complete treatment.",
      },
      {
        name: "Liver transplantation",
        description:
          "If you have developed serious complications from chronic hepatitis C infection, liver transplantation may be an option. During liver transplantation, the surgeon removes your damaged liver and replaces it with a healthy liver. Most transplanted livers come from deceased donors, though a small number come from living donors who donate a portion of their livers.",
      },
      {
        name: "Vaccinations",
        description:
          "Although there is no vaccine for hepatitis C, your doctor will likely recommend that you receive vaccines against the hepatitis A and B viruses. These are separate viruses that also can cause liver damage and complicate the course of chronic hepatitis C.",
      },
    ],
  },
  {
    name: "Breast cancer",
    description:
      "Breast cancer is cancer that forms in the cells of the breasts. Substantial support for breast cancer awareness and research funding has helped created advances in the diagnosis and treatment of breast cancer. Breast cancer survival rates have increased, and the number of deaths associated with this disease is steadily declining, largely due to factors such as earlier detection, a new personalized approach to treatment and a better understanding of the disease.",
    symptoms: [
      "A breast lump or thickening that feels different from the surrounding tissue",
      "Change in the size, shape or appearance of a breast",
      "Changes to the skin over the breast, such as dimpling",
      "A newly inverted nipple",
      "Peeling, scaling, crusting or flaking of the pigmented area of skin surrounding the nipple (areola) or breast skin",
      "Redness or pitting of the skin over your breast, like the skin of an orange",
    ],
    causes: [
      {
        name: "Inherited breast cancer",
        description:
          "Doctors estimate that about 5 to 10 percent of breast cancers are linked to gene mutations passed through generations of a family. If you have a strong family history of breast cancer or other cancers, your doctor may recommend a blood test to help identify specific mutations in BRCA or other genes that are being passed through your family. A number of inherited mutated genes that can increase the likelihood of breast cancer have been identified. The most well-known are breast cancer gene 1 (BRCA1) and breast cancer gene 2 (BRCA2), both of which significantly increase the risk of both breast and ovarian cancer.",
      },
    ],
    treatment: [
      {
        name: "Removing the breast cancer (lumpectomy)",
        description:
          "During a lumpectomy, which may be referred to as breast-conserving surgery or wide local excision, the surgeon removes the tumor and a small margin of surrounding healthy tissue. A lumpectomy may be recommended for removing smaller tumors. Some people with larger tumors may undergo chemotherapy before surgery to shrink a tumor and make it possible to remove completely with a lumpectomy procedure.",
      },
      {
        name: "Removing the entire breast (mastectomy)",
        description:
          "A mastectomy is an operation to remove all of your breast tissue. Most mastectomy procedures remove all of the breast tissue — the lobules, ducts, fatty tissue and some skin, including the nipple and areola (total or simple mastectomy). Newer surgical techniques may be an option in selected cases in order to improve the appearance of the breast. Skin-sparing mastectomy and nipple-sparing mastectomy are increasingly common operations for breast cancer.",
      },
      {
        name: "Removing a limited number of lymph nodes (sentinel node biopsy).",
        description:
          "To determine whether cancer has spread to your lymph nodes, your surgeon will discuss with you the role of removing the lymph nodes that are the first to receive the lymph drainage from your tumor. If no cancer is found in those lymph nodes, the chance of finding cancer in any of the remaining lymph nodes is small and no other nodes need to be removed.",
      },
      {
        name: "Removing several lymph nodes (axillary lymph node dissection)",
        description:
          "If cancer is found in the sentinel lymph nodes, your surgeon will discuss with you the role of removing additional lymph nodes in your armpit.",
      },
      {
        name: "Removing both breasts",
        description:
          "Some women with cancer in one breast may choose to have their other (healthy) breast removed (contralateral prophylactic mastectomy) if they have a very increased risk of cancer in the other breast because of a genetic predisposition or strong family history. Most women with breast cancer in one breast will never develop cancer in the other breast. Discuss your breast cancer risk with your doctor, along with the benefits and risks of this procedure.",
      },
      {
        name: "Radiation therapy",
        description:
          "Radiation therapy uses high-powered beams of energy, such as X-rays and protons, to kill cancer cells. Radiation therapy is typically done using a large machine that aims the energy beams at your body (external beam radiation). But radiation can also be done by placing radioactive material inside your body (brachytherapy).",
      },
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy uses drugs to destroy fast-growing cells, such as cancer cells. If your cancer has a high risk of returning or spreading to another part of your body, your doctor may recommend chemotherapy after surgery to decrease the chance that the cancer will recur. Chemotherapy is sometimes given before surgery in women with larger breast tumors. The goal is to shrink a tumor to a size that makes it easier to remove with surgery.",
      },
    ],
  },
  {
    name: "Cervical cancer",
    description:
      "Cervical cancer is a type of cancer that occurs in the cells of the cervix — the lower part of the uterus that connects to the vagina. Various strains of the human papillomavirus (HPV), a sexually transmitted infection, play a role in causing most cervical cancer.",
    symptoms: [
      "Vaginal bleeding after intercourse, between periods or after menopause",
      "Watery, bloody vaginal discharge that may be heavy and have a fould odor",
      "Pelvic pain or pain during intercourse",
    ],
    causes: [
      {
        name: "DNA mutation",
        description:
          "Cervical cancer begins when healthy cells in the cervix develop changes (mutations) in their DNA. A cell's DNA contains the instructions that tell a cell what to do. It isn't clear what causes cervical cancer, but it's certain that HPV plays a role. HPV is very common, and most people with the virus never develop cancer.",
      },
    ],
    treatment: [
      {
        name: "Surgery to cut away the cancer only",
        description:
          "For a very small cervical cancer, it might be possible to remove the cancer entirely with a cone biopsy. This procedure involves cutting away a cone-shaped piece of cervical tissue, but leaving the rest of the cervix intact. This option may make it possible for you to consider becoming pregnant in the future.",
      },
      {
        name: "Surgery to remove the cervix (trachelectomy)",
        description:
          "Early-stage cervical cancer might be treated with a radical trachelectomy procedure, which removes the cervix and some surrounding tissue. The uterus remains after this procedure, so it may be possible to become pregnant, if you choose.",
      },
      {
        name: "Surgery to remove the cervix and uterus (hysterectomy)",
        description:
          "Most early-stage cervical cancers are treated with a radical hysterectomy operation, which involves removing the cervix, uterus, part of the vagina and nearby lymph nodes. A hysterectomy can cure early-stage cervical cancer and prevent recurrence. But removing the uterus makes it impossible to become pregnant.",
      },
      {
        name: "Radiation",
        description:
          "Radiation therapy uses high-powered energy beams, such as X-rays or protons, to kill cancer cells. Radiation therapy is often combined with chemotherapy as the primary treatment for locally advanced cervical cancers. It can also be used after surgery if there's an increased risk that the cancer will come back.",
      },
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy is a drug treatment that uses chemicals to kill cancer cells. It can be given through a vein or taken in pill form. Sometimes both methods are used. For locally advanced cervical cancer, low doses of chemotherapy are often combined with radiation therapy, since chemotherapy may enhance the effects of the radiation. Higher doses of chemotherapy might be recommended to help control symptoms of very advanced cancer.",
      },
      {
        name: "Immunotherapy",
        description:
          "Immunotherapy is a drug treatment that helps your immune system to fight cancer. Your body's disease-fighting immune system might not attack cancer because the cancer cells produce proteins that make them undetectable by the immune system cells. Immunotherapy works by interfering with that process. For cervical cancer, immunotherapy might be considered when the cancer is advanced and other treatments aren't working.",
      },
    ],
  },
  {
    name: "Colon Cancer",
    description:
      "Colon cancer is a type of cancer that begins in the large intestine (colon). The colon is the final part of the digestive tract. Colon cancer typically affects older adults, though it can happen at any age. It usually begins as small, noncancerous (benign) clumps of cells called polyps that form on the inside of the colon. Over time some of these polyps can become colon cancers.",
    symptoms: [
      "A persistent change in your bowel habits, including diarrhea or constipation or a change in the consistency of your stool",
      "Rectal bleeding or blood in your stool",
      "Persistent abdominal discomfort, such as cramps, gas or pain",
      "A feeling that your bowel does not empty completely",
      "Weakness or fatigue",
      "Unexplained weight loss",
    ],
    causes: [
      {
        name: "DNA mutation",
        description:
          "In general, colon cancer begins when healthy cells in the colon develop changes (mutations) in their DNA. A cell's DNA contains a set of instructions that tell a cell what to do. Healthy cells grow and divide in an orderly way to keep your body functioning normally. But when a cell's DNA is damaged and becomes cancerous, cells continue to divide — even when new cells aren't needed. As the cells accumulate, they form a tumor.",
      },
      {
        name: "Older age",
        description:
          "Colon cancer can be diagnosed at any age, but a majority of people with colon cancer are older than 50. The rates of colon cancer in people younger than 50 have been increasing, but doctors aren't sure why.",
      },
      {
        name: "Family history of colon cancer",
        description:
          "You're more likely to develop colon cancer if you have a blood relative who has had the disease. If more than one family member has colon cancer or rectal cancer, your risk is even greater.",
      },
      {
        name: "Low-fiber, high-fat diet",
        description:
          "Colon cancer and rectal cancer may be associated with a typical Western diet, which is low in fiber and high in fat and calories. Research in this area has had mixed results. Some studies have found an increased risk of colon cancer in people who eat diets high in red meat and processed meat.",
      },
    ],
    treatment: [
      {
        name: "Endoscopic mucosal resection",
        description:
          "Larger polyps might be removed during colonoscopy using special tools to remove the polyp and a small amount of the inner lining of the colon in a procedure called an endoscopic mucosal resection.",
      },
      {
        name: "Minimally invasive surgery (laparoscopic surgery)",
        description:
          "Polyps that can't be removed during a colonoscopy may be removed using laparoscopic surgery. In this procedure, your surgeon performs the operation through several small incisions in your abdominal wall, inserting instruments with attached cameras that display your colon on a video monitor. The surgeon may also take samples from lymph nodes in the area where the cancer is located.",
      },
      {
        name: "Partial colectomy",
        description:
          "During this procedure, the surgeon removes the part of your colon that contains the cancer, along with a margin of normal tissue on either side of the cancer. Your surgeon is often able to reconnect the healthy portions of your colon or rectum. This procedure can commonly be done by a minimally invasive approach (laparoscopy).",
      },
      {
        name: "Lymph node removal",
        description:
          "Nearby lymph nodes are usually also removed during colon cancer surgery and tested for cancer.",
      },
      {
        name: "Surgery to create a way for waste to leave your body",
        description:
          "When it's not possible to reconnect the healthy portions of your colon or rectum, you may need an ostomy. This involves creating an opening in the wall of your abdomen from a portion of the remaining bowel for the elimination of stool into a bag that fits securely over the opening. Sometimes the ostomy is only temporary, allowing your colon or rectum time to heal after surgery. In some cases, however, the colostomy may be permanent.",
      },
    ],
  },
  {
    name: "Lung Cancer",
    description:
      "Lung cancer is a type of cancer that begins in the lungs. Your lungs are two spongy organs in your chest that take in oxygen when you inhale and release carbon dioxide when you exhale. Lung cancer is the leading cause of cancer deaths worldwide.",
    symptoms: [
      "A new cough that does not go away",
      "Coughing up blood, even a small amount",
      "Shortness of breath",
      "Chest pain",
      "Hoarseness",
      "Losing weight without trying",
      "Bone pain",
      "Headache",
    ],
    causes: [
      {
        name: "Smoking",
        description:
          " Your risk of lung cancer increases with the number of cigarettes you smoke each day and the number of years you have smoked. Quitting at any age can significantly lower your risk of developing lung cancer.",
      },
      {
        name: "Exposure to secondhand smoke",
        description:
          "Even if you don't smoke, your risk of lung cancer increases if you're exposed to secondhand smoke.",
      },
      {
        name: "Previous radiation therapy",
        description:
          "If you've undergone radiation therapy to the chest for another type of cancer, you may have an increased risk of developing lung cancer.",
      },
      {
        name: "Exposure to asbestos and other carcinogens",
        description:
          "Workplace exposure to asbestos and other substances known to cause cancer — such as arsenic, chromium and nickel — can increase your risk of developing lung cancer, especially if you're a smoker.",
      },
    ],
    treatment: [
      {
        name: "Surgery",
        description:
          "During surgery, your surgeon works to remove the lung cancer and a margin of healthy tissue. Procedures to remove lung cancer include wedge resection, segmental resection, lobectomy, and pneumonectomy",
      },
      {
        name: "Radiation therapy",
        description:
          "Radiation therapy uses high-powered energy beams from sources such as X-rays and protons to kill cancer cells. During radiation therapy, you lie on a table while a machine moves around you, directing radiation to precise points on your body. For people with locally advanced lung cancer, radiation may be used before surgery or after surgery. It's often combined with chemotherapy treatments. If surgery isn't an option, combined chemotherapy and radiation therapy may be your primary treatment.",
      },
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy uses drugs to kill cancer cells. One or more chemotherapy drugs may be given through a vein in your arm (intravenously) or taken orally. A combination of drugs usually is given in a series of treatments over a period of weeks or months, with breaks in between so that you can recover.",
      },
      {
        name: "Stereotactic body radiotherapy",
        description:
          "Stereotactic body radiotherapy, also known as radiosurgery, is an intense radiation treatment that aims many beams of radiation from many angles at the cancer. Stereotactic body radiotherapy treatment is typically completed in one or a few treatments. Stereotactic body radiotherapy may be an option for people with small lung cancers who can't undergo surgery. It may also be used to treat lung cancer that spreads to other parts of the body, including the brain.",
      },
      {
        name: "Targeted drug therapy",
        description:
          "Targeted drug treatments focus on specific abnormalities present within cancer cells. By blocking these abnormalities, targeted drug treatments can cause cancer cells to die. Many targeted therapy drugs are used to treat lung cancer, though most are reserved for people with advanced or recurrent cancer.",
      },
    ],
  },
  {
    name: "Liver Cancer",
    description:
      "Liver cancer is cancer that begins in the cells of your liver. Your liver is a football-sized organ that sits in the upper right portion of your abdomen, beneath your diaphragm and above your stomach. Several types of cancer can form in the liver. The most common type of liver cancer is hepatocellular carcinoma, which begins in the main type of liver cell (hepatocyte). Other types of liver cancer, such as intrahepatic cholangiocarcinoma and hepatoblastoma, are much less common.",
    symptoms: [
      "Losing weight without trying",
      "Loss of appetite",
      "Upper abdominal pain",
      "Nausea and vomiting",
      "General weakness and fatigue",
      "Abdominal swelling",
      "Yellow discoloration of your skin and the whites of your eyes",
      "White, chalky stools",
    ],
    causes: [
      {
        name: "DNA mutation",
        description:
          "Liver cancer happens when liver cells develop changes (mutations) in their DNA. A cell's DNA is the material that provides instructions for every chemical process in your body. DNA mutations cause changes in these instructions. One result is that cells may begin to grow out of control and eventually form a tumor — a mass of cancerous cells.",
      },
      {
        name: "Chronic infection with HBV or HCV",
        description:
          "Chronic infection with the hepatitis B virus (HBV) or hepatitis C virus (HCV) increases your risk of liver cancer.",
      },
      {
        name: "Cirrhosis",
        description:
          "This progressive and irreversible condition causes scar tissue to form in your liver and increases your chances of developing liver cancer.",
      },
      {
        name: "Diabetes",
        description:
          "People with this blood sugar disorder have a greater risk of liver cancer than those who don't have diabetes.",
      },
      {
        name: "Exposure to aflatoxins",
        description:
          "Aflatoxins are poisons produced by molds that grow on crops that are stored poorly. Crops, such as grains and nuts, can become contaminated with aflatoxins, which can end up in foods made of these products.",
      },
      {
        name: "Excessive alcohol consumption",
        description:
          "Consuming more than a moderate amount of alcohol daily over many years can lead to irreversible liver damage and increase your risk of liver cancer.",
      },
    ],
    treatment: [
      {
        name: "Surgery to remove the tumor",
        description:
          "In certain situations, your doctor may recommend an operation to remove the liver cancer and a small portion of healthy liver tissue that surrounds it if your tumor is small and your liver function is good. Whether this is an option for you also depends on the location of your cancer within the liver, how well your liver functions and your overall health.",
      },
      {
        name: "Liver transplant surgery",
        description:
          "During liver transplant surgery, your diseased liver is removed and replaced with a healthy liver from a donor. Liver transplant surgery is only an option for a small percentage of people with early-stage liver cancer.",
      },
      {
        name: "Heating cancer cells",
        description:
          "Radiofrequency ablation uses electric current to heat and destroy cancer cells. Using an imaging test as a guide, such as ultrasound, the doctor inserts one or more thin needles into small incisions in your abdomen. When the needles reach the tumor, they're heated with an electric current, destroying the cancer cells. Other procedures to heat the cancer cells might use microwaves or lasers.",
      },
      {
        name: "Freezing cancer cells",
        description:
          "Cryoablation uses extreme cold to destroy cancer cells. During the procedure, your doctor places an instrument (cryoprobe) containing liquid nitrogen directly onto liver tumors. Ultrasound images are used to guide the cryoprobe and monitor the freezing of the cells.",
      },
      {
        name: "Injecting alcohol into the tumor",
        description:
          "During alcohol injection, pure alcohol is injected directly into tumors, either through the skin or during an operation. Alcohol causes the tumor cells to die.",
      },
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy uses drugs to kill rapidly growing cells, including cancer cells. Chemotherapy can be administered through a vein in your arm, in pill form or both. Chemotherapy is sometimes used to treat advanced liver cancer.",
      },
      {
        name: "Radiation therapy",
        description:
          "This treatment uses high-powered energy from sources such as X-rays and protons to destroy cancer cells and shrink tumors. Doctors carefully direct the energy to the liver, while sparing the surrounding healthy tissue. Radiation therapy might be an option if other treatments aren't possible or if they haven't helped. For advanced liver cancer, radiation therapy might help control symptoms.",
      },
      {
        name: "Immunotherapy",
        description:
          "Immunotherapy uses your immune system to fight cancer. Your body's disease-fighting immune system may not attack your cancer because the cancer cells produce proteins that blind the immune system cells. Immunotherapy works by interfering with that process.",
      },
    ],
  },
  {
    name: "Bladder cancer",
    description:
      "Bladder cancer is a common type of cancer that begins in the cells of the bladder. The bladder is a hollow muscular organ in your lower abdomen that stores urine. Bladder cancer most often begins in the cells (urothelial cells) that line the inside of your bladder. Urothelial cells are also found in your kidneys and the tubes (ureters) that connect the kidneys to the bladder. Urothelial cancer can happen in the kidneys and ureters, too, but it's much more common in the bladder.",
    symptoms: [
      "Blood in urine",
      "Frequent urination",
      "Painful urination",
      "Back pain",
    ],
    causes: [
      {
        name: "DNA mutation",
        description:
          "Bladder cancer begins when cells in the bladder develop changes (mutations) in their DNA. A cell's DNA contains instructions that tell the cell what to do. The changes tell the cell to multiply rapidly and to go on living when healthy cells would die. The abnormal cells form a tumor that can invade and destroy normal body tissue. In time, the abnormal cells can break away and spread (metastasize) through the body.",
      },
      {
        name: "Smoking",
        description:
          "Smoking cigarettes, cigars or pipes may increase the risk of bladder cancer by causing harmful chemicals to accumulate in the urine. When you smoke, your body processes the chemicals in the smoke and excretes some of them in your urine. These harmful chemicals may damage the lining of your bladder, which can increase your risk of cancer.",
      },
      {
        name: "Increasing age",
        description:
          "Bladder cancer risk increases as you age. Though it can occur at any age, most people diagnosed with bladder cancer are older than 55.",
      },
      {
        name: "Exposure to certain chemicals",
        description:
          "Your kidneys play a key role in filtering harmful chemicals from your bloodstream and moving them into your bladder. Because of this, it's thought that being around certain chemicals may increase the risk of bladder cancer. Chemicals linked to bladder cancer risk include arsenic and chemicals used in the manufacture of dyes, rubber, leather, textiles and paint products.",
      },
      {
        name: "Chronic bladder inflammation",
        description:
          "Chronic or repeated urinary infections or inflammations (cystitis), such as might happen with long-term use of a urinary catheter, may increase the risk of a squamous cell bladder cancer. In some areas of the world, squamous cell carcinoma is linked to chronic bladder inflammation caused by the parasitic infection known as schistosomiasis.",
      },
      {
        name: "Personal or family history of cancer",
        description:
          "If you've had bladder cancer, you're more likely to get it again. If one of your blood relatives — a parent, sibling or child — has a history of bladder cancer, you may have an increased risk of the disease, although it's rare for bladder cancer to run in families.",
      },
    ],
    treatment: [
      {
        name: "Transurethral resection of bladder tumor (TURBT)",
        description:
          "TURBT is a procedure to diagnose bladder cancer and to remove cancers confined to the inner layers of the bladder — those that aren't yet muscle-invasive cancers. During the procedure, a surgeon passes an electric wire loop through a cystoscope and into the bladder. The electric current in the wire is used to cut away or burn away the cancer. Alternatively, a high-energy laser may be used. Because doctors perform the procedure through the urethra, you won't have any cuts (incisions) in your abdomen.",
      },
      {
        name: "Cystectomy",
        description:
          "Cystectomy is surgery to remove all or part of the bladder. During a partial cystectomy, your surgeon removes only the portion of the bladder that contains a single cancerous tumor. A radical cystectomy is an operation to remove the entire bladder and the surrounding lymph nodes. In men, radical cystectomy typically includes removal of the prostate and seminal vesicles. In women, radical cystectomy may involve removal of the uterus, ovaries and part of the vagina.",
      },
      {
        name: "Neobladder reconstruction",
        description:
          "After a radical cystectomy, your surgeon must create a new way for urine to leave your body (urinary diversion). One option for urinary diversion is neobladder reconstruction. Your surgeon creates a sphere-shaped reservoir out of a piece of your intestine. This reservoir, often called a neobladder, sits inside your body and is attached to your urethra. The neobladder allows most people to urinate normally. A small number of people difficulty emptying the neobladder and may need to use a catheter periodically to drain all the urine from the neobladder.",
      },
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy uses drugs to kill cancer cells. Chemotherapy treatment for bladder cancer usually involves two or more chemotherapy drugs used in combination. Intravenous chemotherapy is frequently used before bladder removal surgery to increase the chances of curing the cancer. Chemotherapy may also be used to kill cancer cells that might remain after surgery. In certain situations, chemotherapy may be combined with radiation therapy. Secondly is intravesical therapy. During intravesical chemotherapy, a tube is passed through your urethra directly to your bladder. The chemotherapy is placed in the bladder for a set period of time before being drained. It can be used as the primary treatment for superficial bladder cancer, where the cancer cells affect only the lining of the bladder and not the deeper muscle tissue.",
      },
      {
        name: "Targeted therapy",
        description:
          "Targeted therapy drugs focus on specific weaknesses present within cancer cells. By targeting these weaknesses, targeted drug treatments can cause cancer cells to die. Your cancer cells may be tested to see if targeted therapy is likely to be effective. Targeted therapy may be an option for treating advanced bladder cancer when other treatments haven't helped.",
      },
      {
        name: "Bladder preservation",
        description:
          "In certain situations, people with muscle-invasive bladder cancer who don't want to undergo surgery to remove the bladder may consider trying a combination of treatments instead. Known as trimodality therapy, this approach combines TURBT, chemotherapy and radiation therapy. If, after trying trimodality therapy, not all of the cancer is gone or you have a recurrence of muscle-invasive cancer, your doctor may recommend a radical cystectomy.",
      },
    ],
  },
  {
    name: "Leukemia",
    description:
      "Leukemia is cancer of the body's blood-forming tissues, including the bone marrow and the lymphatic system. Many types of leukemia exist. Some forms of leukemia are more common in children. Other forms of leukemia occur mostly in adults. Leukemia usually involves the white blood cells. Your white blood cells are potent infection fighters — they normally grow and divide in an orderly way, as your body needs them. But in people with leukemia, the bone marrow produces an excessive amount of abnormal white blood cells, which don't function properly.",
    symptoms: [
      "Fever or chills",
      "Persistent fatigue, weakness",
      "Ferquent or severe infections",
      "Losing weight without trying",
      "Swollen lymph nodes, enlarged liver or spleen",
      "Easy bleeding or bruising",
      "Recurrent nosebleeds",
      "Tiny red spots in your skin",
      "Excessive sweating, especially at night",
      "Bone pain or tenderness",
    ],
    causes: [
      {
        name: "Previous cancer treatment",
        description:
          "People who've had certain types of chemotherapy and radiation therapy for other cancers have an increased risk of developing certain types of leukemia.",
      },
      {
        name: "Genetic disorders",
        description:
          "Genetic abnormalities seem to play a role in the development of leukemia. Certain genetic disorders, such as Down syndrome, are associated with an increased risk of leukemia.",
      },
      {
        name: "Exposure to certain chemicals",
        description:
          "Exposure to certain chemicals, such as benzene — which is found in gasoline and is used by the chemical industry — is linked to an increased risk of some kinds of leukemia.",
      },
      {
        name: "Smoking",
        description:
          "Smoking cigarettes increases the risk of acute myelogenous leukemia.",
      },
      {
        name: "Family history of leukemia",
        description:
          "If members of your family have been diagnosed with leukemia, your risk of the disease may be increased.",
      },
    ],
    treatment: [
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy is the major form of treatment for leukemia. This drug treatment uses chemicals to kill leukemia cells. Depending on the type of leukemia you have, you may receive a single drug or a combination of drugs. These drugs may come in a pill form, or they may be injected directly into a vein.",
      },
      {
        name: "Targeted therapy",
        description:
          "Targeted drug treatments focus on specific abnormalities present within cancer cells. By blocking these abnormalities, targeted drug treatments can cause cancer cells to die. Your leukemia cells will be tested to see if targeted therapy may be helpful for you.",
      },
      {
        name: "Radiation therapy",
        description:
          "Radiation therapy uses X-rays or other high-energy beams to damage leukemia cells and stop their growth. During radiation therapy, you lie on a table while a large machine moves around you, directing the radiation to precise points on your body. You may receive radiation in one specific area of your body where there is a collection of leukemia cells, or you may receive radiation over your whole body. Radiation therapy may be used to prepare for a bone marrow transplant.",
      },
      {
        name: "Bone marrow transplant",
        description:
          "A bone marrow transplant, also called a stem cell transplant, helps reestablish healthy stem cells by replacing unhealthy bone marrow with leukemia-free stem cells that will regenerate healthy bone marrow. Prior to a bone marrow transplant, you receive very high doses of chemotherapy or radiation therapy to destroy your leukemia-producing bone marrow. Then you receive an infusion of blood-forming stem cells that help rebuild your bone marrow. You may receive stem cells from a donor or you may be able to use your own stem cells.",
      },
      {
        name: "Immunotherapy",
        description:
          "Immunotherapy uses your immune system to fight cancer. Your body's disease-fighting immune system may not attack your cancer because the cancer cells produce proteins that help them hide from the immune system cells. Immunotherapy works by interfering with that process.",
      },
      {
        name: "Engineering immune cells to fight leukemia",
        description:
          "A specialized treatment called chimeric antigen receptor (CAR)-T cell therapy takes your body's germ-fighting T cells, engineers them to fight cancer and infuses them back into your body. CAR-T cell therapy might be an option for certain types of leukemia.",
      },
    ],
  },
  {
    name: "Nasopharyngeal Carcinoma",
    description:
      "Nasopharyngeal (nay-zoh-fuh-RIN-jee-ul) carcinoma is cancer that occurs in the nasopharynx, which is located behind your nose and above the back of your throat. Nasopharyngeal carcinoma is rare in the United States. It occurs much more frequently in other parts of the world — specifically Southeast Asia. Nasopharyngeal carcinoma is difficult to detect early. That's probably because the nasopharynx isn't easy to examine and symptoms of nasopharyngeal carcinoma mimic those of other, more-common conditions.",
    symptoms: [
      "A lump in your neck caused by a swollen lymph node",
      "Blood in your saliva",
      "Bloody discharge from your nose",
      "Nasal congestion or ringing in your ears",
      "Hearing loss",
      "Frequent ear infections",
      "SOre throat",
      "Headaches",
    ],
    causes: [
      {
        name: "Race",
        description:
          "This type of cancer more commonly affects people in parts of China, Southeast Asia and northern Africa. In the United States, Asian immigrants have a higher risk of this type of cancer than do American-born Asians. Inuits in Alaska also have an increased risk of nasopharyngeal cancer.",
      },
      {
        name: "DNA mutation",
        description:
          "Cancer begins when one or more genetic mutations cause normal cells to grow out of control, invade surrounding structures and eventually spread (metastasize) to other parts of the body. In nasopharyngeal carcinomas, this process begins in the squamous cells that line the surface of the nasopharynx. Exactly what causes the gene mutations that lead to nasopharyngeal carcinoma isn't known, though factors, such as the Epstein-Barr virus, that increase the risk of this cancer have been identified. However, it isn't clear why some people with all the risk factors never develop cancer, while others who have no apparent risk factors do.",
      },
      {
        name: "Salt-cured foods",
        description:
          "Chemicals released in steam when cooking salt-cured foods, such as fish and preserved vegetables, may enter the nasal cavity, increasing the risk of nasopharyngeal carcinoma. Being exposed to these chemicals at an early age may increase the risk even more.",
      },
      {
        name: "Epstein-Barr virus",
        description:
          "This common virus usually produces mild signs and symptoms, such as those of a cold. Sometimes it can cause infectious mononucleosis. The Epstein-Barr virus is also linked to several rare cancers, including nasopharyngeal carcinoma.",
      },
    ],
    treatment: [
      {
        name: "Radiation therapy",
        description:
          "Radiation therapy uses high-powered energy beams, such as X-rays or protons, to kill cancer cells. Radiation therapy for nasopharyngeal carcinoma is usually administered in a procedure called external beam radiation. During this procedure, you're positioned on a table and a large machine is maneuvered around you, directing radiation to the precise spot where it can target your cancer. For small nasopharyngeal tumors, radiation therapy may be the only treatment necessary. In other situations, radiation therapy may be combined with chemotherapy.",
      },
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy is a drug treatment that uses chemicals to kill cancer cells. Chemotherapy drugs can be given in pill form, administered through a vein or both. Chemotherapy at the same time as radiation therapy. When the two treatments are combined, chemotherapy enhances the effectiveness of radiation therapy. This combined treatment is called concomitant therapy or chemoradiation.",
      },
      {
        name: "Surgery",
        description:
          "Surgery is not often used as a treatment for nasopharyngeal carcinoma. Surgery may be used to remove cancerous lymph nodes in the neck. In certain cases, surgery may be used to remove a tumor from the nasopharynx. This usually requires surgeons to make an incision in the roof of your mouth to access the area to remove the cancerous tissue.",
      },
    ],
  },
  {
    name: "Kidney Cancer",
    description:
      "Kidney cancer is cancer that begins in the kidneys. Your kidneys are two bean-shaped organs, each about the size of your fist. They're located behind your abdominal organs, with one kidney on each side of your spine. In adults, renal cell carcinoma is the most common type of kidney cancer. Other less common types of kidney cancer can occur. Young children are more likely to develop a kind of kidney cancer called Wilms' tumor.",
    symptoms: [
      "Blood in your urine, which may appear pink, red or cola colored",
      "Pain in your back or side that does not go away",
      "Loss of appetite",
      "Unexplained weight loss",
      "Tiredness",
      "Fever",
    ],
    causes: [
      {
        name: "DNA mutation",
        description:
          "Kidney cancer begins when some kidney cells develop changes (mutations) in their DNA. A cell's DNA contains the instructions that tell a cell what to do. The changes tell the cells to grow and divide rapidly. The accumulating abnormal cells form a tumor that can extend beyond the kidney. Some cells can break off and spread (metastasize) to distant parts of the body.",
      },
      {
        name: "Certain inherited syndromes",
        description:
          "People who are born with certain inherited syndromes may have an increased risk of kidney cancer, such as those who have von Hippel-Lindau disease, Birt-Hogg-Dube syndrome, tuberous sclerosis complex, hereditary papillary renal cell carcinoma or familial renal cancer.",
      },
      {
        name: "Family history of kidney cancer",
        description:
          "The risk of kidney cancer is higher if close family members have had the disease.",
      },
      {
        name: "Obesity",
        description:
          "People who are obese have a higher risk of kidney cancer than people who are considered to have a healthy weight.",
      },
    ],
    treatment: [
      {
        name: "Removing the affected kidney (nephrectomy)",
        description:
          "A complete (radical) nephrectomy involves removing the entire kidney, a border of healthy tissue and occasionally additional nearby tissues such as the lymph nodes, adrenal gland or other structures. The surgeon may perform a nephrectomy through a single incision in the abdomen or side (open nephrectomy) or through a series of small incisions in the abdomen (laparoscopic or robotic-assisted laparoscopic nephrectomy).",
      },
      {
        name: "Removing the tumor from the kidney (partial nephrectomy)",
        description:
          "Also called kidney-sparing or nephron-sparing surgery, the surgeon removes the cancer and a small margin of healthy tissue that surrounds it rather than the entire kidney. It can be done as an open procedure, or laparoscopically or with robotic assistance. Kidney-sparing surgery is a common treatment for small kidney cancers and it may be an option if you have only one kidney. When possible, kidney-sparing surgery is generally preferred over a complete nephrectomy to preserve kidney function and reduce the risk of later complications, such as kidney disease and the need for dialysis.",
      },
      {
        name: "Treatment to freeze cancer cells (cryoablation)",
        description:
          "During cryoablation, a special hollow needle is inserted through your skin and into the kidney tumor using ultrasound or other image guidance. Cold gas in the needle is used to freeze the cancer cells.",
      },
      {
        name: "Treatment to heat cancer cells (radiofrequency ablation)",
        description:
          "During radiofrequency ablation, a special probe is inserted through your skin and into the kidney tumor using ultrasound or other imaging to guide placement of the probe. An electrical current is run through the needle and into the cancer cells, causing the cells to heat up or burn.",
      },
      {
        name: "Radiation therapy",
        description:
          "Radiation therapy uses high-powered energy beams from sources such as X-rays and protons to kill cancer cells. Radiation therapy is sometimes used to control or reduce symptoms of kidney cancer that has spread to other areas of the body, such as the bones and brain.",
      },
      {
        name: "Immunotherapy",
        description:
          "Immunotherapy uses your immune system to fight cancer. Your body's disease-fighting immune system may not attack your cancer because the cancer cells produce proteins that help them hide from the immune system cells. Immunotherapy works by interfering with that process.",
      },
    ],
  },
  {
    name: "Pancreatic Cancer",
    description:
      "Pancreatic cancer begins in the tissues of your pancreas — an organ in your abdomen that lies behind the lower part of your stomach. Your pancreas releases enzymes that aid digestion and produces hormones that help manage your blood sugar. Several types of growths can occur in the pancreas, including cancerous and noncancerous tumors. The most common type of cancer that forms in the pancreas begins in the cells that line the ducts that carry digestive enzymes out of the pancreas (pancreatic ductal adenocarcinoma). Pancreatic cancer is seldom detected at its early stages when it's most curable. This is because it often doesn't cause symptoms until after it has spread to other organs.",
    symptoms: [
      "Abdominal pain that radiates to your back",
      "Loss of appetite or unintended weight loss",
      "Yellowing of your skin and the whites of your eyes",
      "Light-colored stools",
      "Dark-colored urine",
      "Itchy skin",
      "Blood clots",
      "Fatigue",
    ],
    causes: [
      {
        name: "DNA mutation",
        description:
          "Pancreatic cancer occurs when cells in your pancreas develop changes (mutations) in their DNA. A cell's DNA contains the instructions that tell a cell what to do. These mutations tell the cells to grow uncontrollably and to continue living after normal cells would die. These accumulating cells can form a tumor. When left untreated, the pancreatic cancer cells can spread to nearby organs and blood vessels and to distant parts of the body. Most pancreatic cancer begins in the cells that line the ducts of the pancreas. This type of cancer is called pancreatic adenocarcinoma or pancreatic exocrine cancer. Less frequently, cancer can form in the hormone-producing cells or the neuroendocrine cells of the pancreas. These types of cancer are called pancreatic neuroendocrine tumors, islet cell tumors or pancreatic endocrine cancer.",
      },
    ],
    treatment: [
      {
        name: "Surgery for tumors in the pancreatic head",
        description:
          "If your cancer is located in the head of the pancreas, you may consider an operation called a Whipple procedure (pancreaticoduodenectomy).The Whipple procedure is a technically difficult operation to remove the head of the pancreas, the first part of the small intestine (duodenum), the gallbladder, part of the bile duct and nearby lymph nodes. In some situations, part of the stomach and colon may be removed as well. Your surgeon reconnects the remaining parts of your pancreas, stomach and intestines to allow you to digest food.",
      },
      {
        name: "Surgery for tumors in the pancreatic body and tail",
        description:
          "Surgery to remove the left side (body and tail) of the pancreas is called distal pancreatectomy. Your surgeon may also need to remove your spleen.",
      },
      {
        name: "Surgery for tumors affecting nearby blood vessels",
        description:
          "Many people with advanced pancreatic cancer aren't considered eligible for the Whipple procedure or other pancreatic surgeries if their tumors involve nearby blood vessels. At highly specialized and experienced medical centers, surgeons may offer pancreatic surgery operations that include removing and reconstructing affected blood vessels.",
      },
      {
        name: "Chemotherapy",
        description:
          "Chemotherapy uses drugs to help kill cancer cells. These drugs can be injected into a vein or taken orally. You may receive one chemotherapy drug or a combination of them. Chemotherapy can also be combined with radiation therapy (chemoradiation). Chemoradiation is typically used to treat cancer that hasn't spread beyond the pancreas to other organs. At specialized medical centers, this combination may be used before surgery to help shrink the tumor. Sometimes it is used after surgery to reduce the risk that pancreatic cancer may recur.",
      },
      {
        name: "Radiation therapy",
        description:
          "Radiation therapy uses high-energy beams, such as those made from X-rays and protons, to destroy cancer cells. You may receive radiation treatments before or after cancer surgery, often in combination with chemotherapy. Or your doctor may recommend a combination of radiation and chemotherapy treatments when your cancer can't be treated surgically. Radiation therapy usually comes from a machine that moves around you, directing radiation to specific points on your body (external beam radiation). In specialized medical centers, radiation therapy may be delivered during surgery (intraoperative radiation).",
      },
      {
        name: "Supportive (palliative) care",
        description:
          "Palliative care is specialized medical care that focuses on providing relief from pain and other symptoms of a serious illness. Palliative care is not the same as hospice care or end-of-life care. Palliative care is provided by teams of doctors, nurses, social workers and other specially trained professionals. These teams aim to improve the quality of life for people with cancer and their families. Palliative care specialists work with you, your family and your other doctors to provide an extra layer of support that complements your ongoing medical care. It's often used while undergoing aggressive treatments, such as surgery, chemotherapy and radiation therapy.",
      },
    ],
  },
  // {
  //   name: "",
  //   description: "",
  //   symptoms: [],
  //   causes: [
  // {
  //   name: "",
  //   description: "",
  // },
  //   ],
  //   treatment: [
  //     {
  //       name: "",
  //       description: "",
  //     },
  //   ],
  // },  // {
  //   name: "",
  //   description: "",
  //   symptoms: [],
  //   causes: [
  //     {
  //       name: "",
  //       description: "",
  //     },
  //   ],
  //   treatment: [
  //     {
  //       name: "",
  //       description: "",
  //     },
  //   ],
  // },
];
