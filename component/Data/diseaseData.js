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
  // {
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
  // {
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
