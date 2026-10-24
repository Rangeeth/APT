// Muscle table data. Edit here, then reload the page.
// Each entry = one muscle function.  b=body part, g=muscle group, m=muscle, o=origin, i=insertion,
// a=articulation, f=function, c=compound exercises, s=isolation exercises,
// r=remarks (one bullet per item), n=other notes (one bullet per item).
// IMG at the bottom maps muscles / groups to image files in the images folder.

const D = [
  {
    b: "Legs",
    g: "Quadriceps Femoris",
    m: "Rectus Femoris",
    o: "Anterior aspect of inferior iliac spine",
    i: "Tibial tuberosity via patellar ligament",
    a: "Biarticular",
    f: "Hip flexion (assists)",
    c: "Crunch cum sit up*",
    s: "Hanging / lying leg raise*",
    r: [
      "Active insufficiency: rectus femoris crosses both hip and knee. When it is shortened at both joints at once (hip flexed while the knee is extended, e.g. kicking), it cannot produce full force.",
      "Passive insufficiency (opposite): with hip extended and knee flexed it is stretched over both joints, which limits range (e.g. heel to buttock in prone knee bend).",
      "Reciprocal inhibition: when rectus femoris contracts to extend the knee, the nervous system relaxes the antagonist (hamstrings) so it does not resist the movement."
    ],
    n: [
      "Only quadriceps head that crosses the hip.",
      "Superficial, central muscle of the anterior thigh.",
      "[General] It is also a common site of strain in kicking and sprinting.",
      "Stretch with hip extended and knee flexed (Thomas / prone knee bend)."
    ]
  },
  {
    b: "Legs",
    g: "Quadriceps Femoris",
    m: "Rectus Femoris",
    o: "Anterior aspect of inferior iliac spine",
    i: "Tibial tuberosity via patellar ligament",
    a: "Biarticular",
    f: "Knee extension",
    c: "Squats (back, front, overhead), lunges, step ups, leg press",
    s: "Leg extension",
    r: [
      "Active insufficiency: rectus femoris crosses both hip and knee. When it is shortened at both joints at once (hip flexed while the knee is extended, e.g. kicking), it cannot produce full force.",
      "Passive insufficiency (opposite): with hip extended and knee flexed it is stretched over both joints, which limits range (e.g. heel to buttock in prone knee bend).",
      "Reciprocal inhibition: when rectus femoris contracts to extend the knee, the nervous system relaxes the antagonist (hamstrings) so it does not resist the movement."
    ],
    n: [
      "Only quadriceps head that crosses the hip.",
      "Superficial, central muscle of the anterior thigh.",
      "[General] It is also a common site of strain in kicking and sprinting.",
      "Stretch with hip extended and knee flexed (Thomas / prone knee bend)."
    ]
  },
  {
    b: "Legs",
    g: "Quadriceps Femoris",
    m: "Vastus Lateralis",
    o: "Greater trochanter of femur",
    i: "Tibial tuberosity via patellar ligament",
    a: "Uniarticular",
    f: "Knee extension",
    c: "Squats (back, front, overhead), lunges, step ups, leg press",
    s: "Leg extension",
    r: [
      "Reciprocal inhibition: when vastus lateralis contracts to extend the knee, the nervous system relaxes the antagonist (hamstrings) so it does not resist the movement.",
      "Single-joint muscle, so no active insufficiency."
    ],
    n: [
      "Largest quadriceps head by bulk.",
      "[General] Pulls the patella laterally; imbalance with vastus medialis can contribute to patellofemoral pain."
    ]
  },
  {
    b: "Legs",
    g: "Quadriceps Femoris",
    m: "Vastus Medialis",
    o: "Medial aspect of shaft of femur",
    i: "Tibial tuberosity via patellar ligament",
    a: "Uniarticular",
    f: "Knee extension",
    c: "Squats (back, front, overhead), lunges, step ups, leg press",
    s: "Leg extension",
    r: [
      "Reciprocal inhibition: when vastus medialis contracts to extend the knee, the nervous system relaxes the antagonist (hamstrings) so it does not resist the movement.",
      "Single-joint muscle, so no active insufficiency."
    ],
    n: [
      "Teardrop muscle on the inner thigh.",
      "[General] Its lower oblique fibres help stabilize the patella."
    ]
  },
  {
    b: "Legs",
    g: "Quadriceps Femoris",
    m: "Vastus Intermedius",
    o: "Anterolateral aspect of shaft of femur",
    i: "Tibial tuberosity via patellar ligament",
    a: "Uniarticular",
    f: "Knee extension",
    c: "Squats (back, front, overhead), lunges, step ups, leg press",
    s: "Leg extension",
    r: [
      "Reciprocal inhibition: when vastus intermedius contracts to extend the knee, the nervous system relaxes the antagonist (hamstrings) so it does not resist the movement.",
      "Single-joint muscle, so no active insufficiency.",
      "Deep muscle, located below rectus femoris."
    ],
    n: [
      "Deep muscle, located below rectus femoris, so it cannot be seen or palpated directly.",
      "[General] Pure knee extensor active in all squat depths."
    ]
  },
  {
    b: "Legs",
    g: "Hamstrings",
    m: "Biceps Femoris (short head)",
    o: "Linea aspera on posterior femur",
    i: "Head of fibula, lateral condyle of tibia",
    a: "Uniarticular",
    f: "Knee flexion",
    c: "—",
    s: "Leg curls",
    r: [
      "Reciprocal inhibition: when the short head of biceps femoris contracts to flex the knee, the nervous system relaxes the antagonist (quadriceps) so it does not resist the movement.",
      "The only hamstring that does not cross the hip, so it has no hip extension role and is not affected by active insufficiency from the hip."
    ],
    n: [
      "Only hamstring that does not cross the hip; origin is the linea aspera of the femur (the other three arise from the ischial tuberosity).",
      "Trained by leg curls, not by hip hinge movements."
    ]
  },
  {
    b: "Legs",
    g: "Hamstrings",
    m: "Biceps Femoris (long head)",
    o: "Ischial tuberosity",
    i: "Head of fibula, lateral condyle of tibia",
    a: "Biarticular",
    f: "Knee flexion",
    c: "—",
    s: "Leg curls",
    r: [
      "Active insufficiency: hamstrings are shortened at both joints when the hip is extended and the knee flexed together (leg curl with hip extended), so force drops and cramps are common.",
      "Passive insufficiency: with knee extended and hip flexed (straight leg raise, toe touch) hamstring length limits hip flexion range.",
      "Reciprocal inhibition: when the hamstrings contracts to flex the knee or extend the hip, the nervous system relaxes the antagonist (quadriceps / hip flexors) so it does not resist the movement."
    ],
    n: [
      "Lateral hamstring.",
      "Together with semitendinosus and semimembranosus it is a hip extensor assist in squats, deadlifts and hip thrusts.",
      "[General] Most commonly strained hamstring in sprinting; the hamstring to quadriceps strength balance is commonly used in injury screening."
    ]
  },
  {
    b: "Legs",
    g: "Hamstrings",
    m: "Biceps Femoris (long head)",
    o: "Ischial tuberosity",
    i: "Head of fibula, lateral condyle of tibia",
    a: "Biarticular",
    f: "Hip extension (assists)",
    c: "Deadlift, stiff leg deadlift, squats, lunges, hip thrust, leg press",
    s: "—",
    r: [
      "Active insufficiency: hamstrings are shortened at both joints when the hip is extended and the knee flexed together (leg curl with hip extended), so force drops and cramps are common.",
      "Passive insufficiency: with knee extended and hip flexed (straight leg raise, toe touch) hamstring length limits hip flexion range.",
      "Reciprocal inhibition: when the hamstrings contracts to flex the knee or extend the hip, the nervous system relaxes the antagonist (quadriceps / hip flexors) so it does not resist the movement."
    ],
    n: [
      "Lateral hamstring.",
      "Together with semitendinosus and semimembranosus it is a hip extensor assist in squats, deadlifts and hip thrusts.",
      "[General] Most commonly strained hamstring in sprinting; the hamstring to quadriceps strength balance is commonly used in injury screening."
    ]
  },
  {
    b: "Legs",
    g: "Hamstrings",
    m: "Semitendinosus",
    o: "Ischial tuberosity",
    i: "Medial to tibial tuberosity",
    a: "Biarticular",
    f: "Knee flexion",
    c: "—",
    s: "Leg curls",
    r: [
      "Active insufficiency: hamstrings are shortened at both joints when the hip is extended and the knee flexed together (leg curl with hip extended), so force drops and cramps are common.",
      "Passive insufficiency: with knee extended and hip flexed (straight leg raise, toe touch) hamstring length limits hip flexion range.",
      "Reciprocal inhibition: when the hamstrings contracts to flex the knee or extend the hip, the nervous system relaxes the antagonist (quadriceps / hip flexors) so it does not resist the movement."
    ],
    n: [
      "Medial hamstring, superficial to semimembranosus; inserts medial to the tibial tuberosity.",
      "[General] Long tendon lies at the pes anserine region with sartorius and gracilis."
    ]
  },
  {
    b: "Legs",
    g: "Hamstrings",
    m: "Semitendinosus",
    o: "Ischial tuberosity",
    i: "Medial to tibial tuberosity",
    a: "Biarticular",
    f: "Hip extension (assists)",
    c: "Deadlift, stiff leg deadlift, squats, lunges, hip thrust, leg press",
    s: "—",
    r: [
      "Active insufficiency: hamstrings are shortened at both joints when the hip is extended and the knee flexed together (leg curl with hip extended), so force drops and cramps are common.",
      "Passive insufficiency: with knee extended and hip flexed (straight leg raise, toe touch) hamstring length limits hip flexion range.",
      "Reciprocal inhibition: when the hamstrings contracts to flex the knee or extend the hip, the nervous system relaxes the antagonist (quadriceps / hip flexors) so it does not resist the movement."
    ],
    n: [
      "Medial hamstring, superficial to semimembranosus; inserts medial to the tibial tuberosity.",
      "[General] Long tendon lies at the pes anserine region with sartorius and gracilis."
    ]
  },
  {
    b: "Legs",
    g: "Hamstrings",
    m: "Semimembranosus",
    o: "Ischial tuberosity",
    i: "Medial condyle of tibia",
    a: "Biarticular",
    f: "Knee flexion",
    c: "—",
    s: "Leg curls",
    r: [
      "Active insufficiency: hamstrings are shortened at both joints when the hip is extended and the knee flexed together (leg curl with hip extended), so force drops and cramps are common.",
      "Passive insufficiency: with knee extended and hip flexed (straight leg raise, toe touch) hamstring length limits hip flexion range.",
      "Reciprocal inhibition: when the hamstrings contracts to flex the knee or extend the hip, the nervous system relaxes the antagonist (quadriceps / hip flexors) so it does not resist the movement."
    ],
    n: [
      "Medial hamstring, deep to semitendinosus; inserts on the medial condyle of the tibia.",
      "[General] Also pulls the posterior joint capsule of the knee."
    ]
  },
  {
    b: "Legs",
    g: "Hamstrings",
    m: "Semimembranosus",
    o: "Ischial tuberosity",
    i: "Medial condyle of tibia",
    a: "Biarticular",
    f: "Hip extension (assists)",
    c: "Deadlift, stiff leg deadlift, squats, lunges, hip thrust, leg press",
    s: "—",
    r: [
      "Active insufficiency: hamstrings are shortened at both joints when the hip is extended and the knee flexed together (leg curl with hip extended), so force drops and cramps are common.",
      "Passive insufficiency: with knee extended and hip flexed (straight leg raise, toe touch) hamstring length limits hip flexion range.",
      "Reciprocal inhibition: when the hamstrings contracts to flex the knee or extend the hip, the nervous system relaxes the antagonist (quadriceps / hip flexors) so it does not resist the movement."
    ],
    n: [
      "Medial hamstring, deep to semitendinosus; inserts on the medial condyle of the tibia.",
      "[General] Also pulls the posterior joint capsule of the knee."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Maximus",
    o: "Gluteal surface of ilium, sacrum up to coccyx",
    i: "Gluteal tuberosity of femur, iliotibial band",
    a: "Uniarticular",
    f: "Hip extension",
    c: "Squats, lunges, step ups, deadlift, stiff leg deadlift, hip thrust, leg press",
    s: "Cable glute kickback*",
    r: [
      "Reciprocal inhibition: when gluteus maximus contracts to extend the hip, the nervous system relaxes the antagonist (hip flexors (iliopsoas, rectus femoris)) so it does not resist the movement.",
      "Largest muscle of the human body.",
      "Hamstrings assist in hip extension."
    ],
    n: [
      "Largest muscle of the human body.",
      "Inserts on the gluteal tuberosity and the iliotibial band.",
      "Hamstrings assist in hip extension.",
      "Trained by squats, lunges, step ups, deadlifts and hip thrusts.",
      "[General] Hip thrust gives peak activation at full hip extension."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Maximus",
    o: "Gluteal surface of ilium, sacrum up to coccyx",
    i: "Gluteal tuberosity of femur, iliotibial band",
    a: "Uniarticular",
    f: "Hip external rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when gluteus maximus contracts to extend the hip, the nervous system relaxes the antagonist (hip flexors (iliopsoas, rectus femoris)) so it does not resist the movement.",
      "Largest muscle of the human body.",
      "Hamstrings assist in hip extension."
    ],
    n: [
      "Largest muscle of the human body.",
      "Inserts on the gluteal tuberosity and the iliotibial band.",
      "Hamstrings assist in hip extension.",
      "Trained by squats, lunges, step ups, deadlifts and hip thrusts.",
      "[General] Hip thrust gives peak activation at full hip extension."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Medius",
    o: "Gluteal surface of ilium",
    i: "Greater trochanter of femur",
    a: "Uniarticular",
    f: "Lateral hip stabilization",
    c: "Lunges, step ups (single leg support)",
    s: "—",
    r: [
      "Reciprocal inhibition: when gluteus medius contracts to abduct the hip, the nervous system relaxes the antagonist (adductors) so it does not resist the movement.",
      "Lateral hip stabilizers: prevent the pelvis dropping on the opposite side in single leg stance."
    ],
    n: [
      "Lateral hip stabilizer: keeps the pelvis level in single leg stance, which is why lunges and step ups (unilateral work) are important.",
      "Slides: counsel members to keep unilateral movements in training."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Medius",
    o: "Gluteal surface of ilium",
    i: "Greater trochanter of femur",
    a: "Uniarticular",
    f: "Hip abduction",
    c: "—",
    s: "Seated hip abduction machine, standing hip abduction (cable)",
    r: [
      "Reciprocal inhibition: when gluteus medius contracts to abduct the hip, the nervous system relaxes the antagonist (adductors) so it does not resist the movement.",
      "Lateral hip stabilizers: prevent the pelvis dropping on the opposite side in single leg stance."
    ],
    n: [
      "Lateral hip stabilizer: keeps the pelvis level in single leg stance, which is why lunges and step ups (unilateral work) are important.",
      "Slides: counsel members to keep unilateral movements in training."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Medius",
    o: "Gluteal surface of ilium",
    i: "Greater trochanter of femur",
    a: "Uniarticular",
    f: "Hip internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when gluteus medius contracts to abduct the hip, the nervous system relaxes the antagonist (adductors) so it does not resist the movement.",
      "Lateral hip stabilizers: prevent the pelvis dropping on the opposite side in single leg stance."
    ],
    n: [
      "Lateral hip stabilizer: keeps the pelvis level in single leg stance, which is why lunges and step ups (unilateral work) are important.",
      "Slides: counsel members to keep unilateral movements in training."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Minimus",
    o: "Gluteal surface of ilium",
    i: "Greater trochanter of femur",
    a: "Uniarticular",
    f: "Lateral hip stabilization",
    c: "Lunges, step ups (single leg support)",
    s: "—",
    r: [
      "Reciprocal inhibition: when gluteus minimus contracts to abduct the hip, the nervous system relaxes the antagonist (adductors) so it does not resist the movement.",
      "Lateral hip stabilizers: prevent the pelvis dropping on the opposite side in single leg stance."
    ],
    n: [
      "Same origin, insertion and functions as gluteus medius; lies deep to it.",
      "Lateral hip stabilizer, assists unilateral stability in lunges and step ups."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Minimus",
    o: "Gluteal surface of ilium",
    i: "Greater trochanter of femur",
    a: "Uniarticular",
    f: "Hip abduction",
    c: "—",
    s: "Seated hip abduction machine, standing hip abduction (cable)",
    r: [
      "Reciprocal inhibition: when gluteus minimus contracts to abduct the hip, the nervous system relaxes the antagonist (adductors) so it does not resist the movement.",
      "Lateral hip stabilizers: prevent the pelvis dropping on the opposite side in single leg stance."
    ],
    n: [
      "Same origin, insertion and functions as gluteus medius; lies deep to it.",
      "Lateral hip stabilizer, assists unilateral stability in lunges and step ups."
    ]
  },
  {
    b: "Legs",
    g: "Gluteal Group",
    m: "Gluteus Minimus",
    o: "Gluteal surface of ilium",
    i: "Greater trochanter of femur",
    a: "Uniarticular",
    f: "Hip internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when gluteus minimus contracts to abduct the hip, the nervous system relaxes the antagonist (adductors) so it does not resist the movement.",
      "Lateral hip stabilizers: prevent the pelvis dropping on the opposite side in single leg stance."
    ],
    n: [
      "Same origin, insertion and functions as gluteus medius; lies deep to it.",
      "Lateral hip stabilizer, assists unilateral stability in lunges and step ups."
    ]
  },
  {
    b: "Legs",
    g: "Adductors",
    m: "Adductor Magnus",
    o: "Pelvic girdle",
    i: "Posterior femur",
    a: "Uniarticular",
    f: "Hip adduction",
    c: "—",
    s: "Seated hip adduction machine, standing hip adduction (cable)",
    r: [
      "Reciprocal inhibition: when adductor magnus contracts to adduct the hip, the nervous system relaxes the antagonist (gluteus medius / minimus (abductors)) so it does not resist the movement."
    ],
    n: [
      "Largest adductor; has an adductor part (hip adduction) and an extensor (hamstring-like) part.",
      "Trained by seated hip adduction machine and standing cable hip adduction (frontal plane)."
    ]
  },
  {
    b: "Legs",
    g: "Adductors",
    m: "Adductor Magnus",
    o: "Pelvic girdle",
    i: "Posterior femur",
    a: "Uniarticular",
    f: "Hip extension",
    c: "Squats*, deadlift*",
    s: "—",
    r: [
      "Reciprocal inhibition: when adductor magnus contracts to adduct the hip, the nervous system relaxes the antagonist (gluteus medius / minimus (abductors)) so it does not resist the movement."
    ],
    n: [
      "Largest adductor; has an adductor part (hip adduction) and an extensor (hamstring-like) part.",
      "Trained by seated hip adduction machine and standing cable hip adduction (frontal plane)."
    ]
  },
  {
    b: "Legs",
    g: "Adductors",
    m: "Adductor Longus",
    o: "Pelvic girdle",
    i: "Posterior femur",
    a: "Uniarticular",
    f: "Hip adduction",
    c: "—",
    s: "Seated hip adduction machine, standing hip adduction (cable)",
    r: [
      "Reciprocal inhibition: when adductor longus contracts to adduct the hip, the nervous system relaxes the antagonist (gluteus medius / minimus (abductors)) so it does not resist the movement."
    ],
    n: [
      "Most anterior of the adductor group; trained with adductor machine and cable adduction."
    ]
  },
  {
    b: "Legs",
    g: "Adductors",
    m: "Adductor Brevis",
    o: "Pelvic girdle",
    i: "Posterior femur",
    a: "Uniarticular",
    f: "Hip adduction",
    c: "—",
    s: "Seated hip adduction machine, standing hip adduction (cable)",
    r: [
      "Reciprocal inhibition: when adductor brevis contracts to adduct the hip, the nervous system relaxes the antagonist (gluteus medius / minimus (abductors)) so it does not resist the movement."
    ],
    n: [
      "Lies deep to adductor longus and pectineus; works with adductor longus in hip adduction."
    ]
  },
  {
    b: "Legs",
    g: "Sartorius (no group)",
    m: "Sartorius",
    o: "Anterior superior iliac spine",
    i: "Proximal tibia, inferomedial to tibial tuberosity",
    a: "Biarticular",
    f: "Hip flexion",
    c: "—",
    s: "—",
    r: [
      "Active insufficiency: sartorius crosses hip and knee; shortened at both together (hip flexed, abducted and externally rotated with knee flexed, as in sitting cross-legged) it is weak and cramps easily.",
      "Longest muscle of the body; does not belong to any group."
    ],
    n: [
      "Longest muscle of the body.",
      "Does not belong to any group.",
      "Works as a knee and hip stabilizer in lower body exercises (squats, lunges, step ups).",
      "[General] Called the 'tailor's muscle' because it produces the cross-legged sitting position."
    ]
  },
  {
    b: "Legs",
    g: "Sartorius (no group)",
    m: "Sartorius",
    o: "Anterior superior iliac spine",
    i: "Proximal tibia, inferomedial to tibial tuberosity",
    a: "Biarticular",
    f: "Hip abduction",
    c: "—",
    s: "—",
    r: [
      "Active insufficiency: sartorius crosses hip and knee; shortened at both together (hip flexed, abducted and externally rotated with knee flexed, as in sitting cross-legged) it is weak and cramps easily.",
      "Longest muscle of the body; does not belong to any group."
    ],
    n: [
      "Longest muscle of the body.",
      "Does not belong to any group.",
      "Works as a knee and hip stabilizer in lower body exercises (squats, lunges, step ups).",
      "[General] Called the 'tailor's muscle' because it produces the cross-legged sitting position."
    ]
  },
  {
    b: "Legs",
    g: "Sartorius (no group)",
    m: "Sartorius",
    o: "Anterior superior iliac spine",
    i: "Proximal tibia, inferomedial to tibial tuberosity",
    a: "Biarticular",
    f: "Hip external rotation",
    c: "—",
    s: "—",
    r: [
      "Active insufficiency: sartorius crosses hip and knee; shortened at both together (hip flexed, abducted and externally rotated with knee flexed, as in sitting cross-legged) it is weak and cramps easily.",
      "Longest muscle of the body; does not belong to any group."
    ],
    n: [
      "Longest muscle of the body.",
      "Does not belong to any group.",
      "Works as a knee and hip stabilizer in lower body exercises (squats, lunges, step ups).",
      "[General] Called the 'tailor's muscle' because it produces the cross-legged sitting position."
    ]
  },
  {
    b: "Legs",
    g: "Sartorius (no group)",
    m: "Sartorius",
    o: "Anterior superior iliac spine",
    i: "Proximal tibia, inferomedial to tibial tuberosity",
    a: "Biarticular",
    f: "Knee flexion",
    c: "—",
    s: "Leg curls (minor assist)*",
    r: [
      "Active insufficiency: sartorius crosses hip and knee; shortened at both together (hip flexed, abducted and externally rotated with knee flexed, as in sitting cross-legged) it is weak and cramps easily.",
      "Longest muscle of the body; does not belong to any group."
    ],
    n: [
      "Longest muscle of the body.",
      "Does not belong to any group.",
      "Works as a knee and hip stabilizer in lower body exercises (squats, lunges, step ups).",
      "[General] Called the 'tailor's muscle' because it produces the cross-legged sitting position."
    ]
  },
  {
    b: "Legs",
    g: "Sartorius (no group)",
    m: "Sartorius",
    o: "Anterior superior iliac spine",
    i: "Proximal tibia, inferomedial to tibial tuberosity",
    a: "Biarticular",
    f: "Knee and hip stabilization",
    c: "Squats, lunges, step ups",
    s: "—",
    r: [
      "Active insufficiency: sartorius crosses hip and knee; shortened at both together (hip flexed, abducted and externally rotated with knee flexed, as in sitting cross-legged) it is weak and cramps easily.",
      "Longest muscle of the body; does not belong to any group."
    ],
    n: [
      "Longest muscle of the body.",
      "Does not belong to any group.",
      "Works as a knee and hip stabilizer in lower body exercises (squats, lunges, step ups).",
      "[General] Called the 'tailor's muscle' because it produces the cross-legged sitting position."
    ]
  },
  {
    b: "Legs",
    g: "Lower Leg",
    m: "Gastrocnemius",
    o: "Lateral and medial condyles of femur",
    i: "Posterior calcaneus via Achilles tendon",
    a: "Biarticular",
    f: "Plantarflexion",
    c: "Jump rope*",
    s: "Straight leg calf raise",
    r: [
      "Active insufficiency: gastrocnemius crosses knee and ankle.",
      "With the knee flexed it is already shortened at the knee, so it cannot plantarflex the ankle with full force; the soleus takes over. This is why the seated calf raise isolates soleus and the straight leg calf raise hits both.",
      "Passive insufficiency: straight knee limits dorsiflexion more than a bent knee.",
      "Reciprocal inhibition: when gastrocnemius contracts to plantarflex the ankle, the nervous system relaxes the antagonist (tibialis anterior) so it does not resist the movement."
    ],
    n: [
      "Two heads (medial and lateral) arising from the femoral condyles; insertion via Achilles tendon.",
      "Trained with straight leg calf raise (knee extended).",
      "[General] Contains a higher proportion of fast twitch fibres than soleus."
    ]
  },
  {
    b: "Legs",
    g: "Lower Leg",
    m: "Gastrocnemius",
    o: "Lateral and medial condyles of femur",
    i: "Posterior calcaneus via Achilles tendon",
    a: "Biarticular",
    f: "Knee flexion (assists)",
    c: "—",
    s: "Leg curls (minor assist)*",
    r: [
      "Active insufficiency: gastrocnemius crosses knee and ankle.",
      "With the knee flexed it is already shortened at the knee, so it cannot plantarflex the ankle with full force; the soleus takes over. This is why the seated calf raise isolates soleus and the straight leg calf raise hits both.",
      "Passive insufficiency: straight knee limits dorsiflexion more than a bent knee.",
      "Reciprocal inhibition: when gastrocnemius contracts to plantarflex the ankle, the nervous system relaxes the antagonist (tibialis anterior) so it does not resist the movement."
    ],
    n: [
      "Two heads (medial and lateral) arising from the femoral condyles; insertion via Achilles tendon.",
      "Trained with straight leg calf raise (knee extended).",
      "[General] Contains a higher proportion of fast twitch fibres than soleus."
    ]
  },
  {
    b: "Legs",
    g: "Lower Leg",
    m: "Soleus",
    o: "Head of fibula, medial border of tibia",
    i: "Posterior calcaneus via Achilles tendon",
    a: "Uniarticular",
    f: "Plantarflexion",
    c: "—",
    s: "Seated calf raise, straight leg calf raise",
    r: [
      "Reciprocal inhibition: when soleus contracts to plantarflex the ankle, the nervous system relaxes the antagonist (tibialis anterior) so it does not resist the movement.",
      "Single-joint, so it works fully with the knee bent (seated calf raise)."
    ],
    n: [
      "Lies deep to gastrocnemius; pure ankle plantarflexor, works best with the knee flexed (seated calf raise).",
      "[General] Higher proportion of slow twitch fibres; important for posture and venous return (calf pump)."
    ]
  },
  {
    b: "Legs",
    g: "Lower Leg",
    m: "Tibialis Anterior",
    o: "Upper two thirds of lateral tibia",
    i: "1st metatarsal of the foot",
    a: "Uniarticular",
    f: "Dorsiflexion",
    c: "—",
    s: "Toe raises",
    r: [
      "Reciprocal inhibition: when tibialis anterior contracts to dorsiflex the ankle, the nervous system relaxes the antagonist (gastrocnemius / soleus) so it does not resist the movement.",
      "Often neglected: toe raises balance the calf and help shin and ankle health."
    ],
    n: [
      "Slides: counsel members who never do toe raises on why it is an important exercise.",
      "Dorsiflexion and inversion; trained by toe raises.",
      "[General] Balances the calf and helps prevent shin splints."
    ]
  },
  {
    b: "Legs",
    g: "Lower Leg",
    m: "Tibialis Anterior",
    o: "Upper two thirds of lateral tibia",
    i: "1st metatarsal of the foot",
    a: "Uniarticular",
    f: "Inversion",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when tibialis anterior contracts to dorsiflex the ankle, the nervous system relaxes the antagonist (gastrocnemius / soleus) so it does not resist the movement.",
      "Often neglected: toe raises balance the calf and help shin and ankle health."
    ],
    n: [
      "Slides: counsel members who never do toe raises on why it is an important exercise.",
      "Dorsiflexion and inversion; trained by toe raises.",
      "[General] Balances the calf and helps prevent shin splints."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Spinalis",
    o: "Spinous processes of L2 to T11",
    i: "Occipital bone (blends with semispinalis capitis)",
    a: "Multiarticular",
    f: "Spine extension",
    c: "Deadlift*, good mornings",
    s: "Back extensions, prone alternate hand-leg raise, prone both hand-leg raise (superman)",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Most medial erector spinae column.",
      "Erector spinae segments: capitis, cervicis, thoracis, lumborum.",
      "Mnemonic lateral to medial: I Love Spaghetti.",
      "Trained by back extensions, superman, prone alternate hand-leg raise, good mornings.",
      "Deadlift is a structural lift."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Spinalis",
    o: "Spinous processes of L2 to T11",
    i: "Occipital bone (blends with semispinalis capitis)",
    a: "Multiarticular",
    f: "Maintains neutral spine",
    c: "Deadlift*, good mornings, squats*",
    s: "Plank*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Most medial erector spinae column.",
      "Erector spinae segments: capitis, cervicis, thoracis, lumborum.",
      "Mnemonic lateral to medial: I Love Spaghetti.",
      "Trained by back extensions, superman, prone alternate hand-leg raise, good mornings.",
      "Deadlift is a structural lift."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Spinalis",
    o: "Spinous processes of L2 to T11",
    i: "Occipital bone (blends with semispinalis capitis)",
    a: "Multiarticular",
    f: "Spine lateral flexion",
    c: "—",
    s: "Side bend*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Most medial erector spinae column.",
      "Erector spinae segments: capitis, cervicis, thoracis, lumborum.",
      "Mnemonic lateral to medial: I Love Spaghetti.",
      "Trained by back extensions, superman, prone alternate hand-leg raise, good mornings.",
      "Deadlift is a structural lift."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Longissimus",
    o: "Blends with iliocostalis in lumbar region",
    i: "Mastoid process of skull",
    a: "Multiarticular",
    f: "Spine extension",
    c: "Deadlift*, good mornings",
    s: "Back extensions, prone alternate hand-leg raise, prone both hand-leg raise (superman)",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Middle erector spinae column; blends with iliocostalis in the lumbar region.",
      "Slides assignment: counsel members to reset their deadlifts.",
      "Trained in good mornings, where it maintains a neutral spine."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Longissimus",
    o: "Blends with iliocostalis in lumbar region",
    i: "Mastoid process of skull",
    a: "Multiarticular",
    f: "Maintains neutral spine",
    c: "Deadlift*, good mornings, squats*",
    s: "Plank*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Middle erector spinae column; blends with iliocostalis in the lumbar region.",
      "Slides assignment: counsel members to reset their deadlifts.",
      "Trained in good mornings, where it maintains a neutral spine."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Longissimus",
    o: "Blends with iliocostalis in lumbar region",
    i: "Mastoid process of skull",
    a: "Multiarticular",
    f: "Spine lateral flexion",
    c: "—",
    s: "Side bend*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Middle erector spinae column; blends with iliocostalis in the lumbar region.",
      "Slides assignment: counsel members to reset their deadlifts.",
      "Trained in good mornings, where it maintains a neutral spine."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Iliocostalis",
    o: "Iliac crest, sacrum, spinous processes of L5 to T11",
    i: "Transverse processes of C4 to C6",
    a: "Multiarticular",
    f: "Spine extension",
    c: "Deadlift*, good mornings",
    s: "Back extensions, prone alternate hand-leg raise, prone both hand-leg raise (superman)",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Most lateral erector spinae column (I of I Love Spaghetti).",
      "Segments: cervicis, thoracis, lumborum.",
      "Maintains neutral spine in deadlift and good mornings."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Iliocostalis",
    o: "Iliac crest, sacrum, spinous processes of L5 to T11",
    i: "Transverse processes of C4 to C6",
    a: "Multiarticular",
    f: "Maintains neutral spine",
    c: "Deadlift*, good mornings, squats*",
    s: "Plank*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Most lateral erector spinae column (I of I Love Spaghetti).",
      "Segments: cervicis, thoracis, lumborum.",
      "Maintains neutral spine in deadlift and good mornings."
    ]
  },
  {
    b: "Back",
    g: "Erector Spinae",
    m: "Iliocostalis",
    o: "Iliac crest, sacrum, spinous processes of L5 to T11",
    i: "Transverse processes of C4 to C6",
    a: "Multiarticular",
    f: "Spine lateral flexion",
    c: "—",
    s: "Side bend*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (rectus abdominis and other abdominals) so it does not resist the movement.",
      "Spans many vertebral segments.",
      "Mnemonic lateral to medial: I Love Spaghetti (Iliocostalis, Longissimus, Spinalis)."
    ],
    n: [
      "Most lateral erector spinae column (I of I Love Spaghetti).",
      "Segments: cervicis, thoracis, lumborum.",
      "Maintains neutral spine in deadlift and good mornings."
    ]
  },
  {
    b: "Back",
    g: "Deep Back",
    m: "Multifidus",
    o: "Sacrum, PSIS, lateral aspects of all vertebrae up to C4",
    i: "Spinous processes of L5 to C2, 2 to 4 levels above origin",
    a: "Multiarticular",
    f: "Spine extension",
    c: "Deadlift*, good mornings",
    s: "Back extensions, prone alternate hand-leg raise, prone both hand-leg raise (superman)",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (abdominals) so it does not resist the movement.",
      "Deep segmental stabilizer of the spine."
    ],
    n: [
      "Deep muscle next to the spinous processes; inserts 2 to 4 levels above its origin.",
      "Works with erector spinae in spine extension, neutral spine and lateral flexion.",
      "[General] Segmental stabilizer, often weak in people with low back pain."
    ]
  },
  {
    b: "Back",
    g: "Deep Back",
    m: "Multifidus",
    o: "Sacrum, PSIS, lateral aspects of all vertebrae up to C4",
    i: "Spinous processes of L5 to C2, 2 to 4 levels above origin",
    a: "Multiarticular",
    f: "Maintains neutral spine",
    c: "Deadlift*, good mornings, squats*",
    s: "Plank*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (abdominals) so it does not resist the movement.",
      "Deep segmental stabilizer of the spine."
    ],
    n: [
      "Deep muscle next to the spinous processes; inserts 2 to 4 levels above its origin.",
      "Works with erector spinae in spine extension, neutral spine and lateral flexion.",
      "[General] Segmental stabilizer, often weak in people with low back pain."
    ]
  },
  {
    b: "Back",
    g: "Deep Back",
    m: "Multifidus",
    o: "Sacrum, PSIS, lateral aspects of all vertebrae up to C4",
    i: "Spinous processes of L5 to C2, 2 to 4 levels above origin",
    a: "Multiarticular",
    f: "Spine lateral flexion",
    c: "—",
    s: "Side bend*",
    r: [
      "Reciprocal inhibition: when the spinal extensors contracts to extend the spine, the nervous system relaxes the antagonist (abdominals) so it does not resist the movement.",
      "Deep segmental stabilizer of the spine."
    ],
    n: [
      "Deep muscle next to the spinous processes; inserts 2 to 4 levels above its origin.",
      "Works with erector spinae in spine extension, neutral spine and lateral flexion.",
      "[General] Segmental stabilizer, often weak in people with low back pain."
    ]
  },
  {
    b: "Back",
    g: "Trapezius",
    m: "Upper Trapezius",
    o: "Occipital protuberance to C7",
    i: "Lateral third of posterior clavicle",
    a: "Multiarticular",
    f: "Shoulder girdle elevation",
    c: "—",
    s: "Shrugs (barbell / dumbbell)",
    r: [
      "Reciprocal inhibition: when upper trapezius contracts to elevate the scapula, the nervous system relaxes the antagonist (lower trapezius / serratus anterior) so it does not resist the movement."
    ],
    n: [
      "Diamond-shaped trapezius, upper part.",
      "Trained by barbell or dumbbell shrugs (coronal plane).",
      "Slides: shrugs appear in weeks 1 to 4 of the advanced back schedule."
    ]
  },
  {
    b: "Back",
    g: "Trapezius",
    m: "Upper Trapezius",
    o: "Occipital protuberance to C7",
    i: "Lateral third of posterior clavicle",
    a: "Multiarticular",
    f: "Neck extension",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when upper trapezius contracts to elevate the scapula, the nervous system relaxes the antagonist (lower trapezius / serratus anterior) so it does not resist the movement."
    ],
    n: [
      "Diamond-shaped trapezius, upper part.",
      "Trained by barbell or dumbbell shrugs (coronal plane).",
      "Slides: shrugs appear in weeks 1 to 4 of the advanced back schedule."
    ]
  },
  {
    b: "Back",
    g: "Trapezius",
    m: "Middle Trapezius",
    o: "T1 to T4",
    i: "Acromion process, spine of scapula",
    a: "Multiarticular",
    f: "Scapular retraction",
    c: "Bent over row*, seated cable row*, prone high row*",
    s: "Prone shrugs",
    r: [
      "Reciprocal inhibition: when middle trapezius contracts to retract the scapula, the nervous system relaxes the antagonist (pectoralis minor / serratus anterior (protractors)) so it does not resist the movement."
    ],
    n: [
      "Retracts scapula with the rhomboids.",
      "Trained by prone shrugs (transverse plane) and rows.",
      "Slides: prone high row is part of the back schedule."
    ]
  },
  {
    b: "Back",
    g: "Trapezius",
    m: "Lower Trapezius",
    o: "T5 to T12",
    i: "Medial end of spine of scapula",
    a: "Multiarticular",
    f: "Scapular depression",
    c: "Pull ups, lat pulldown (scapular depression phase)*",
    s: "Reverse shrugs",
    r: [
      "Reciprocal inhibition: when lower trapezius contracts to depress the scapula, the nervous system relaxes the antagonist (upper trapezius / levator scapulae) so it does not resist the movement."
    ],
    n: [
      "Only depression function; trained by reverse shrugs (coronal plane).",
      "[General] Important partner of serratus anterior for upward rotation and shoulder health."
    ]
  },
  {
    b: "Back",
    g: "Levator Scapulae and Rhomboids",
    m: "Levator Scapulae",
    o: "Transverse processes of C1 to C4",
    i: "Medial border of scapula, superior to spine of scapula",
    a: "Uniarticular",
    f: "Scapular elevation (shoulder girdle elevation)",
    c: "—",
    s: "Shrugs",
    r: [
      "Reciprocal inhibition: when levator scapulae contracts to elevate the scapula, the nervous system relaxes the antagonist (lower trapezius) so it does not resist the movement."
    ],
    n: [
      "Elevates the scapula with upper trapezius (shoulder girdle elevation).",
      "Trained by shrugs.",
      "[General] Often tight in neck and upper back pain; name 'levator' reminds you it lifts the scapula."
    ]
  },
  {
    b: "Back",
    g: "Levator Scapulae and Rhomboids",
    m: "Rhomboid Minor",
    o: "Spinous processes of C7 to T1",
    i: "Medial border of scapula, in line with spine of scapula",
    a: "Uniarticular",
    f: "Scapular retraction",
    c: "Bent over row*, seated cable row*, prone high row*",
    s: "Prone shrugs",
    r: [
      "Reciprocal inhibition: when the rhomboids contracts to retract the scapula, the nervous system relaxes the antagonist (serratus anterior and pectoralis minor) so it does not resist the movement."
    ],
    n: [
      "Minor lies above major (C7 to T1), in line with the spine of the scapula.",
      "Scapular retraction; trained by rows and prone shrugs."
    ]
  },
  {
    b: "Back",
    g: "Levator Scapulae and Rhomboids",
    m: "Rhomboid Major",
    o: "Spinous processes of T2 to T5",
    i: "Medial border of scapula, inferior to spine of scapula",
    a: "Uniarticular",
    f: "Scapular retraction",
    c: "Bent over row*, seated cable row*, prone high row*",
    s: "Prone shrugs",
    r: [
      "Reciprocal inhibition: when the rhomboids contracts to retract the scapula, the nervous system relaxes the antagonist (serratus anterior and pectoralis minor) so it does not resist the movement."
    ],
    n: [
      "Major lies below the spine of the scapula (T2 to T5).",
      "Scapular retraction; trained by rows and prone shrugs."
    ]
  },
  {
    b: "Back",
    g: "Lats and Teres Major",
    m: "Latissimus Dorsi",
    o: "Spinous processes T7 to sacrum and iliac crest (thoracolumbar fascia), last 3 ribs, inferior angle of scapula",
    i: "Intertubercular (bicipital) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder extension",
    c: "Bent over row, one arm row, low cable / seated row, supported row, T-bar row, chin ups (narrow grip), narrow grip lat pulldown",
    s: "Pullover (DB / cable / cam), straight arm pulldown",
    r: [
      "Reciprocal inhibition: when the latissimus dorsi contracts to extend or adduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major (flexors) and middle deltoid (abductor)) so it does not resist the movement.",
      "Pull ups (wide grip) emphasize adduction; chin ups (narrow grip) emphasize extension."
    ],
    n: [
      "Widest muscle of the back.",
      "Pull ups (wide grip) target shoulder adduction; chin ups (narrow grip) target shoulder extension.",
      "Bent over row must be done before supported row; broad grip lat pulldown is preferred before narrow grip.",
      "Relative strength = maximum weight lifted / body weight; absolute strength = maximum weight lifted irrespective of body weight."
    ]
  },
  {
    b: "Back",
    g: "Lats and Teres Major",
    m: "Latissimus Dorsi",
    o: "Spinous processes T7 to sacrum and iliac crest (thoracolumbar fascia), last 3 ribs, inferior angle of scapula",
    i: "Intertubercular (bicipital) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder adduction",
    c: "Pull ups (wide grip), wide grip lat pulldown",
    s: "—",
    r: [
      "Reciprocal inhibition: when the latissimus dorsi contracts to extend or adduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major (flexors) and middle deltoid (abductor)) so it does not resist the movement.",
      "Pull ups (wide grip) emphasize adduction; chin ups (narrow grip) emphasize extension."
    ],
    n: [
      "Widest muscle of the back.",
      "Pull ups (wide grip) target shoulder adduction; chin ups (narrow grip) target shoulder extension.",
      "Bent over row must be done before supported row; broad grip lat pulldown is preferred before narrow grip.",
      "Relative strength = maximum weight lifted / body weight; absolute strength = maximum weight lifted irrespective of body weight."
    ]
  },
  {
    b: "Back",
    g: "Lats and Teres Major",
    m: "Latissimus Dorsi",
    o: "Spinous processes T7 to sacrum and iliac crest (thoracolumbar fascia), last 3 ribs, inferior angle of scapula",
    i: "Intertubercular (bicipital) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when the latissimus dorsi contracts to extend or adduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major (flexors) and middle deltoid (abductor)) so it does not resist the movement.",
      "Pull ups (wide grip) emphasize adduction; chin ups (narrow grip) emphasize extension."
    ],
    n: [
      "Widest muscle of the back.",
      "Pull ups (wide grip) target shoulder adduction; chin ups (narrow grip) target shoulder extension.",
      "Bent over row must be done before supported row; broad grip lat pulldown is preferred before narrow grip.",
      "Relative strength = maximum weight lifted / body weight; absolute strength = maximum weight lifted irrespective of body weight."
    ]
  },
  {
    b: "Back",
    g: "Lats and Teres Major",
    m: "Teres Major",
    o: "Inferior angle of scapula",
    i: "Intertubercular (bicipital) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder extension",
    c: "Bent over row, one arm row, low cable / seated row, supported row, T-bar row, chin ups (narrow grip), narrow grip lat pulldown",
    s: "Pullover (DB / cable / cam), straight arm pulldown",
    r: [
      "Reciprocal inhibition: when teres major contracts to extend or adduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major (flexors) and middle deltoid (abductor)) so it does not resist the movement.",
      "Pull ups (wide grip) emphasize adduction; chin ups (narrow grip) emphasize extension."
    ],
    n: [
      "Teres major is not a rotator cuff muscle (teres minor is).",
      "Shares origin region (inferior angle of scapula), insertion (bicipital groove) and functions with the latissimus dorsi; called 'lat's little helper'."
    ]
  },
  {
    b: "Back",
    g: "Lats and Teres Major",
    m: "Teres Major",
    o: "Inferior angle of scapula",
    i: "Intertubercular (bicipital) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder adduction",
    c: "Pull ups (wide grip), wide grip lat pulldown",
    s: "—",
    r: [
      "Reciprocal inhibition: when teres major contracts to extend or adduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major (flexors) and middle deltoid (abductor)) so it does not resist the movement.",
      "Pull ups (wide grip) emphasize adduction; chin ups (narrow grip) emphasize extension."
    ],
    n: [
      "Teres major is not a rotator cuff muscle (teres minor is).",
      "Shares origin region (inferior angle of scapula), insertion (bicipital groove) and functions with the latissimus dorsi; called 'lat's little helper'."
    ]
  },
  {
    b: "Back",
    g: "Lats and Teres Major",
    m: "Teres Major",
    o: "Inferior angle of scapula",
    i: "Intertubercular (bicipital) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when teres major contracts to extend or adduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major (flexors) and middle deltoid (abductor)) so it does not resist the movement.",
      "Pull ups (wide grip) emphasize adduction; chin ups (narrow grip) emphasize extension."
    ],
    n: [
      "Teres major is not a rotator cuff muscle (teres minor is).",
      "Shares origin region (inferior angle of scapula), insertion (bicipital groove) and functions with the latissimus dorsi; called 'lat's little helper'."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Major (clavicular head)",
    o: "Medial half of anterior clavicle",
    i: "Bicipital (intertubercular) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder horizontal adduction",
    c: "Chest press, incline DB press (+30°)",
    s: "Chest fly",
    r: [
      "Reciprocal inhibition: when pectoralis major contracts to horizontally adduct the shoulder, the nervous system relaxes the antagonist (posterior deltoid / middle trapezius / rhomboids) so it does not resist the movement.",
      "Bench angle decides which head works most: incline +30° clavicular, flat and decline -15° sternocostal and abdominal."
    ],
    n: [
      "Trained by incline press at +30 degrees.",
      "Slides: counsel members who incline press at a steeper angle than +30 degrees [General] Too steep an angle shifts load from the chest to the anterior deltoid.."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Major (clavicular head)",
    o: "Medial half of anterior clavicle",
    i: "Bicipital (intertubercular) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder flexion",
    c: "Incline DB press (+30°)",
    s: "Front raise (assist)*",
    r: [
      "Reciprocal inhibition: when pectoralis major contracts to horizontally adduct the shoulder, the nervous system relaxes the antagonist (posterior deltoid / middle trapezius / rhomboids) so it does not resist the movement.",
      "Bench angle decides which head works most: incline +30° clavicular, flat and decline -15° sternocostal and abdominal."
    ],
    n: [
      "Trained by incline press at +30 degrees.",
      "Slides: counsel members who incline press at a steeper angle than +30 degrees [General] Too steep an angle shifts load from the chest to the anterior deltoid.."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Major (clavicular head)",
    o: "Medial half of anterior clavicle",
    i: "Bicipital (intertubercular) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when pectoralis major contracts to horizontally adduct the shoulder, the nervous system relaxes the antagonist (posterior deltoid / middle trapezius / rhomboids) so it does not resist the movement.",
      "Bench angle decides which head works most: incline +30° clavicular, flat and decline -15° sternocostal and abdominal."
    ],
    n: [
      "Trained by incline press at +30 degrees.",
      "Slides: counsel members who incline press at a steeper angle than +30 degrees [General] Too steep an angle shifts load from the chest to the anterior deltoid.."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Major (sternocostal head)",
    o: "Anterior sternum, superior 6 costal cartilages",
    i: "Bicipital (intertubercular) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder horizontal adduction",
    c: "Flat barbell bench press, decline DB press (-15°)",
    s: "Chest fly",
    r: [
      "Reciprocal inhibition: when pectoralis major contracts to horizontally adduct the shoulder, the nervous system relaxes the antagonist (posterior deltoid / middle trapezius / rhomboids) so it does not resist the movement.",
      "Bench angle decides which head works most: incline +30° clavicular, flat and decline -15° sternocostal and abdominal."
    ],
    n: [
      "Trained by flat bench press and decline press.",
      "Decline angle recommended: -15 degrees (shallow decline).",
      "Slides: use the kinetic chain in pressing movements."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Major (sternocostal head)",
    o: "Anterior sternum, superior 6 costal cartilages",
    i: "Bicipital (intertubercular) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when pectoralis major contracts to horizontally adduct the shoulder, the nervous system relaxes the antagonist (posterior deltoid / middle trapezius / rhomboids) so it does not resist the movement.",
      "Bench angle decides which head works most: incline +30° clavicular, flat and decline -15° sternocostal and abdominal."
    ],
    n: [
      "Trained by flat bench press and decline press.",
      "Decline angle recommended: -15 degrees (shallow decline).",
      "Slides: use the kinetic chain in pressing movements."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Major (abdominal head)",
    o: "Aponeurosis of external obliques",
    i: "Bicipital (intertubercular) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder horizontal adduction",
    c: "Decline DB press (-15°), flat bench press",
    s: "Chest fly",
    r: [
      "Reciprocal inhibition: when pectoralis major contracts to horizontally adduct the shoulder, the nervous system relaxes the antagonist (posterior deltoid / middle trapezius / rhomboids) so it does not resist the movement.",
      "Bench angle decides which head works most: incline +30° clavicular, flat and decline -15° sternocostal and abdominal."
    ],
    n: [
      "Origin is the aponeurosis of the external obliques.",
      "Decline press at -15 degrees emphasizes the abdominal and sternocostal heads."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Major (abdominal head)",
    o: "Aponeurosis of external obliques",
    i: "Bicipital (intertubercular) groove of humerus",
    a: "Uniarticular",
    f: "Shoulder internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when pectoralis major contracts to horizontally adduct the shoulder, the nervous system relaxes the antagonist (posterior deltoid / middle trapezius / rhomboids) so it does not resist the movement.",
      "Bench angle decides which head works most: incline +30° clavicular, flat and decline -15° sternocostal and abdominal."
    ],
    n: [
      "Origin is the aponeurosis of the external obliques.",
      "Decline press at -15 degrees emphasizes the abdominal and sternocostal heads."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Minor",
    o: "3rd to 5th ribs",
    i: "Coracoid process of scapula",
    a: "Uniarticular",
    f: "Scapular protraction",
    c: "Chest press (scapula protraction at lockout)*",
    s: "Push up plus*",
    r: [
      "Reciprocal inhibition: when pectoralis minor contracts to protract the scapula, the nervous system relaxes the antagonist (rhomboids / middle trapezius (retractors)) so it does not resist the movement."
    ],
    n: [
      "Lies deep to pectoralis major; the only chest muscle on the scapula (coracoid process), so it protracts and stabilizes the scapula rather than moving the humerus."
    ]
  },
  {
    b: "Chest",
    g: "Pectorals",
    m: "Pectoralis Minor",
    o: "3rd to 5th ribs",
    i: "Coracoid process of scapula",
    a: "Uniarticular",
    f: "Scapular stabilization",
    c: "Chest press*, overhead press*",
    s: "—",
    r: [
      "Reciprocal inhibition: when pectoralis minor contracts to protract the scapula, the nervous system relaxes the antagonist (rhomboids / middle trapezius (retractors)) so it does not resist the movement."
    ],
    n: [
      "Lies deep to pectoralis major; the only chest muscle on the scapula (coracoid process), so it protracts and stabilizes the scapula rather than moving the humerus."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Supraspinatus",
    o: "Supraspinous fossa of scapula",
    i: "Greater tubercle of humerus, superior facet",
    a: "Uniarticular",
    f: "Holds head of humerus (stabilization)",
    c: "Overhead presses, bench press (stabilizer)*",
    s: "Rotator cuff internal / external rotation",
    r: [
      "Reciprocal inhibition: when supraspinatus contracts to start abduction, the nervous system relaxes the antagonist (adductors (latissimus dorsi, pectoralis major)) so it does not resist the movement.",
      "Rotator cuff centres the humeral head in the glenoid."
    ],
    n: [
      "Rotator cuff mnemonic: SITS (Supraspinatus, Infraspinatus, Teres minor, Subscapularis).",
      "Inserts on the superior facet of the greater tubercle.",
      "Holds the head of the humerus and starts abduction."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Supraspinatus",
    o: "Supraspinous fossa of scapula",
    i: "Greater tubercle of humerus, superior facet",
    a: "Uniarticular",
    f: "Initial few degrees of shoulder abduction",
    c: "Upright row",
    s: "Lateral raises",
    r: [
      "Reciprocal inhibition: when supraspinatus contracts to start abduction, the nervous system relaxes the antagonist (adductors (latissimus dorsi, pectoralis major)) so it does not resist the movement.",
      "Rotator cuff centres the humeral head in the glenoid."
    ],
    n: [
      "Rotator cuff mnemonic: SITS (Supraspinatus, Infraspinatus, Teres minor, Subscapularis).",
      "Inserts on the superior facet of the greater tubercle.",
      "Holds the head of the humerus and starts abduction."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Infraspinatus",
    o: "Infraspinous fossa of scapula",
    i: "Greater tubercle of humerus, middle facet",
    a: "Uniarticular",
    f: "Holds head of humerus (stabilization)",
    c: "Overhead presses, bench press (stabilizer)*",
    s: "—",
    r: [
      "Reciprocal inhibition: when infraspinatus contracts to externally rotate the shoulder, the nervous system relaxes the antagonist (subscapularis (internal rotator)) so it does not resist the movement."
    ],
    n: [
      "Inserts on the middle facet of the greater tubercle.",
      "Main external rotator with teres minor.",
      "Rotator cuff exercise: external rotation (transverse plane)."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Infraspinatus",
    o: "Infraspinous fossa of scapula",
    i: "Greater tubercle of humerus, middle facet",
    a: "Uniarticular",
    f: "Shoulder external rotation",
    c: "—",
    s: "Rotator cuff external rotation",
    r: [
      "Reciprocal inhibition: when infraspinatus contracts to externally rotate the shoulder, the nervous system relaxes the antagonist (subscapularis (internal rotator)) so it does not resist the movement."
    ],
    n: [
      "Inserts on the middle facet of the greater tubercle.",
      "Main external rotator with teres minor.",
      "Rotator cuff exercise: external rotation (transverse plane)."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Teres Minor",
    o: "Lateral border of scapula",
    i: "Greater tubercle of humerus, inferior facet",
    a: "Uniarticular",
    f: "Holds head of humerus (stabilization)",
    c: "Overhead presses, bench press (stabilizer)*",
    s: "—",
    r: [
      "Reciprocal inhibition: when teres minor contracts to externally rotate the shoulder, the nervous system relaxes the antagonist (subscapularis (internal rotator)) so it does not resist the movement."
    ],
    n: [
      "Inserts on the inferior facet of the greater tubercle.",
      "Not the same as teres major (which is not a rotator cuff muscle).",
      "External rotation with infraspinatus."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Teres Minor",
    o: "Lateral border of scapula",
    i: "Greater tubercle of humerus, inferior facet",
    a: "Uniarticular",
    f: "Shoulder external rotation",
    c: "—",
    s: "Rotator cuff external rotation",
    r: [
      "Reciprocal inhibition: when teres minor contracts to externally rotate the shoulder, the nervous system relaxes the antagonist (subscapularis (internal rotator)) so it does not resist the movement."
    ],
    n: [
      "Inserts on the inferior facet of the greater tubercle.",
      "Not the same as teres major (which is not a rotator cuff muscle).",
      "External rotation with infraspinatus."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Subscapularis",
    o: "Subscapular fossa (anterior surface) of scapula",
    i: "Lesser tubercle of humerus",
    a: "Uniarticular",
    f: "Holds head of humerus (stabilization)",
    c: "Overhead presses, bench press (stabilizer)*",
    s: "—",
    r: [
      "Reciprocal inhibition: when subscapularis contracts to internally rotate the shoulder, the nervous system relaxes the antagonist (infraspinatus and teres minor (external rotators)) so it does not resist the movement."
    ],
    n: [
      "Only rotator cuff muscle on the anterior surface of the scapula; inserts on the lesser tubercle.",
      "Rotator cuff internal rotation exercise."
    ]
  },
  {
    b: "Shoulders",
    g: "Rotator Cuff (SITS)",
    m: "Subscapularis",
    o: "Subscapular fossa (anterior surface) of scapula",
    i: "Lesser tubercle of humerus",
    a: "Uniarticular",
    f: "Shoulder internal rotation",
    c: "—",
    s: "Rotator cuff internal rotation",
    r: [
      "Reciprocal inhibition: when subscapularis contracts to internally rotate the shoulder, the nervous system relaxes the antagonist (infraspinatus and teres minor (external rotators)) so it does not resist the movement."
    ],
    n: [
      "Only rotator cuff muscle on the anterior surface of the scapula; inserts on the lesser tubercle.",
      "Rotator cuff internal rotation exercise."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Anterior Deltoid",
    o: "Lateral half of anterior clavicle",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder flexion",
    c: "Hammer grip shoulder press",
    s: "Front raise",
    r: [
      "Reciprocal inhibition: when anterior deltoid contracts to flex the shoulder, the nervous system relaxes the antagonist (posterior deltoid and latissimus dorsi (extensors)) so it does not resist the movement."
    ],
    n: [
      "Overhead pressing: strict overhead (military) press, push press and push jerk.",
      "Slides: standing overhead presses are superior to seated overhead presses; use the kinetic chain in pressing movements (as in powerlifting).",
      "Hammer grip press is in the sagittal plane (shoulder flexion)."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Anterior Deltoid",
    o: "Lateral half of anterior clavicle",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder horizontal adduction",
    c: "Chest press, bench press",
    s: "Chest fly",
    r: [
      "Reciprocal inhibition: when anterior deltoid contracts to flex the shoulder, the nervous system relaxes the antagonist (posterior deltoid and latissimus dorsi (extensors)) so it does not resist the movement."
    ],
    n: [
      "Overhead pressing: strict overhead (military) press, push press and push jerk.",
      "Slides: standing overhead presses are superior to seated overhead presses; use the kinetic chain in pressing movements (as in powerlifting).",
      "Hammer grip press is in the sagittal plane (shoulder flexion)."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Anterior Deltoid",
    o: "Lateral half of anterior clavicle",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder vertical abduction (overhead pressing)",
    c: "Push press, push jerk, military press, seated overhead press, behind neck press, Arnold press",
    s: "—",
    r: [
      "Reciprocal inhibition: when anterior deltoid contracts to flex the shoulder, the nervous system relaxes the antagonist (posterior deltoid and latissimus dorsi (extensors)) so it does not resist the movement."
    ],
    n: [
      "Overhead pressing: strict overhead (military) press, push press and push jerk.",
      "Slides: standing overhead presses are superior to seated overhead presses; use the kinetic chain in pressing movements (as in powerlifting).",
      "Hammer grip press is in the sagittal plane (shoulder flexion)."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Anterior Deltoid",
    o: "Lateral half of anterior clavicle",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder internal rotation",
    c: "—",
    s: "—",
    r: [
      "Reciprocal inhibition: when anterior deltoid contracts to flex the shoulder, the nervous system relaxes the antagonist (posterior deltoid and latissimus dorsi (extensors)) so it does not resist the movement."
    ],
    n: [
      "Overhead pressing: strict overhead (military) press, push press and push jerk.",
      "Slides: standing overhead presses are superior to seated overhead presses; use the kinetic chain in pressing movements (as in powerlifting).",
      "Hammer grip press is in the sagittal plane (shoulder flexion)."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Middle Deltoid",
    o: "Acromion process of scapula",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder abduction",
    c: "Upright row",
    s: "Lateral raises",
    r: [
      "Reciprocal inhibition: when middle deltoid contracts to abduct the shoulder, the nervous system relaxes the antagonist (latissimus dorsi / pectoralis major (adductors)) so it does not resist the movement."
    ],
    n: [
      "Main abductor; lateral raise is the standard isolation exercise.",
      "Origin acromion; also assisted by supraspinatus in abduction.",
      "Lateral raises are in the advanced chest and shoulder schedule."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Posterior Deltoid",
    o: "Spine of scapula",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder extension",
    c: "Bent over row, one arm row, seated row, chin ups",
    s: "Straight arm pulldown",
    r: [
      "Reciprocal inhibition: when posterior deltoid contracts to extend or horizontally abduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major) so it does not resist the movement."
    ],
    n: [
      "Origin spine of scapula.",
      "Works in back rowing exercises (shoulder extension) as well as horizontal abduction (prone high row, reverse pec deck).",
      "Hence it is a working muscle in pull ups and lat pulldowns."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Posterior Deltoid",
    o: "Spine of scapula",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder horizontal abduction",
    c: "Prone high row",
    s: "Reverse pec deck",
    r: [
      "Reciprocal inhibition: when posterior deltoid contracts to extend or horizontally abduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major) so it does not resist the movement."
    ],
    n: [
      "Origin spine of scapula.",
      "Works in back rowing exercises (shoulder extension) as well as horizontal abduction (prone high row, reverse pec deck).",
      "Hence it is a working muscle in pull ups and lat pulldowns."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Posterior Deltoid",
    o: "Spine of scapula",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder adduction",
    c: "Pull ups, wide grip lat pulldown",
    s: "—",
    r: [
      "Reciprocal inhibition: when posterior deltoid contracts to extend or horizontally abduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major) so it does not resist the movement."
    ],
    n: [
      "Origin spine of scapula.",
      "Works in back rowing exercises (shoulder extension) as well as horizontal abduction (prone high row, reverse pec deck).",
      "Hence it is a working muscle in pull ups and lat pulldowns."
    ]
  },
  {
    b: "Shoulders",
    g: "Deltoids",
    m: "Posterior Deltoid",
    o: "Spine of scapula",
    i: "Deltoid tuberosity of humerus",
    a: "Uniarticular",
    f: "Shoulder external rotation",
    c: "—",
    s: "Rotator cuff external rotation (assist)*",
    r: [
      "Reciprocal inhibition: when posterior deltoid contracts to extend or horizontally abduct the shoulder, the nervous system relaxes the antagonist (anterior deltoid / pectoralis major) so it does not resist the movement."
    ],
    n: [
      "Origin spine of scapula.",
      "Works in back rowing exercises (shoulder extension) as well as horizontal abduction (prone high row, reverse pec deck).",
      "Hence it is a working muscle in pull ups and lat pulldowns."
    ]
  },
  {
    b: "Abdominals",
    g: "Abdominal Group",
    m: "Rectus Abdominis",
    o: "Pubic symphysis",
    i: "Xiphoid process, costal cartilages 5 to 7",
    a: "Multiarticular",
    f: "Trunk flexion",
    c: "Crunch cum sit up (floor / decline / inverted), twisting crunch cum sit up",
    s: "Forward crunch (floor / cable / machine), reverse crunch (floor, incline bench, ab dip stand, hanging), ab crunch machine",
    r: [
      "Reciprocal inhibition: when rectus abdominis contracts to flex the trunk, the nervous system relaxes the antagonist (erector spinae and multifidus) so it does not resist the movement.",
      "Linea alba = 'white line' joining left and right rectus; tendinous intersections create the six pack.",
      "Leg raises are hip flexion, not rectus work."
    ],
    n: [
      "Linea alba (Latin: linea = line, albus = white) is a white fibrous band connecting the right and left sides.",
      "Tendinous intersections create the six pack and vary between people.",
      "Leg raises are hip flexion, so they do not train the abs; a reverse crunch is the correct exercise.",
      "Hanging reverse crunch: start from 90 degrees and do not use momentum."
    ]
  },
  {
    b: "Abdominals",
    g: "Abdominal Group",
    m: "External Obliques",
    o: "Ribs 5 to 12",
    i: "Anterior iliac crest, pubic tubercle, linea alba (via aponeurosis)",
    a: "Multiarticular",
    f: "Trunk lateral flexion",
    c: "—",
    s: "High pulley lateral flexion, bench lateral flexion",
    r: [
      "Reciprocal inhibition: when the external obliques contracts to rotate the trunk to the opposite side, the nervous system relaxes the antagonist (the opposite-side obliques and spinal rotators) so it does not resist the movement.",
      "Works with the contralateral internal oblique to produce rotation."
    ],
    n: [
      "Rotates to the opposite side.",
      "Trained by twisting crunch cum sit up, seated rotation (machine / cable), high pulley lateral flexion.",
      "Slides: explain all the muscles of the abdominal group and their importance."
    ]
  },
  {
    b: "Abdominals",
    g: "Abdominal Group",
    m: "External Obliques",
    o: "Ribs 5 to 12",
    i: "Anterior iliac crest, pubic tubercle, linea alba (via aponeurosis)",
    a: "Multiarticular",
    f: "Trunk rotation (to the opposite side)",
    c: "Twisting crunch cum sit up",
    s: "Seated rotation (machine / cable), Russian twist*",
    r: [
      "Reciprocal inhibition: when the external obliques contracts to rotate the trunk to the opposite side, the nervous system relaxes the antagonist (the opposite-side obliques and spinal rotators) so it does not resist the movement.",
      "Works with the contralateral internal oblique to produce rotation."
    ],
    n: [
      "Rotates to the opposite side.",
      "Trained by twisting crunch cum sit up, seated rotation (machine / cable), high pulley lateral flexion.",
      "Slides: explain all the muscles of the abdominal group and their importance."
    ]
  },
  {
    b: "Abdominals",
    g: "Abdominal Group",
    m: "Internal Obliques",
    o: "Anterior iliac crest, inguinal ligament, thoracolumbar fascia",
    i: "Ribs 9 to 12, linea alba",
    a: "Multiarticular",
    f: "Trunk lateral flexion",
    c: "—",
    s: "High pulley lateral flexion, bench lateral flexion",
    r: [
      "Reciprocal inhibition: when the internal obliques contracts to rotate the trunk to the same side, the nervous system relaxes the antagonist (the opposite-side obliques) so it does not resist the movement.",
      "Rotates to the same side, the opposite of the external oblique."
    ],
    n: [
      "Rotates to the same side (opposite of external).",
      "Lies deep to the external obliques.",
      "Trained by seated rotation and high pulley lateral flexion."
    ]
  },
  {
    b: "Abdominals",
    g: "Abdominal Group",
    m: "Internal Obliques",
    o: "Anterior iliac crest, inguinal ligament, thoracolumbar fascia",
    i: "Ribs 9 to 12, linea alba",
    a: "Multiarticular",
    f: "Trunk rotation (to the same side)",
    c: "Twisting crunch cum sit up",
    s: "Seated rotation (machine / cable), Russian twist*",
    r: [
      "Reciprocal inhibition: when the internal obliques contracts to rotate the trunk to the same side, the nervous system relaxes the antagonist (the opposite-side obliques) so it does not resist the movement.",
      "Rotates to the same side, the opposite of the external oblique."
    ],
    n: [
      "Rotates to the same side (opposite of external).",
      "Lies deep to the external obliques.",
      "Trained by seated rotation and high pulley lateral flexion."
    ]
  },
  {
    b: "Abdominals",
    g: "Abdominal Group",
    m: "Transversus Abdominis",
    o: "Iliac crest, inguinal ligament, thoracolumbar fascia, bottom 6 costal cartilages",
    i: "Pubic symphysis, linea alba, xiphoid process",
    a: "Multiarticular",
    f: "Abdominal compression",
    c: "Plank*, side plank*",
    s: "—",
    r: [
      "Deepest abdominal layer.",
      "Acts as a natural corset; bracing it before heavy lifts stabilizes the spine."
    ],
    n: [
      "Deepest abdominal layer: from superficial to deep, rectus abdominis, external obliques, internal obliques, transversus abdominis.",
      "Compresses the abdomen and braces the trunk; planks and side planks stabilize."
    ]
  },
  {
    b: "Abdominals",
    g: "Abdominal Group",
    m: "Transversus Abdominis",
    o: "Iliac crest, inguinal ligament, thoracolumbar fascia, bottom 6 costal cartilages",
    i: "Pubic symphysis, linea alba, xiphoid process",
    a: "Multiarticular",
    f: "Bracing / stabilization of trunk",
    c: "Plank*, side plank*, heavy lifts (squat, deadlift)*",
    s: "—",
    r: [
      "Deepest abdominal layer.",
      "Acts as a natural corset; bracing it before heavy lifts stabilizes the spine."
    ],
    n: [
      "Deepest abdominal layer: from superficial to deep, rectus abdominis, external obliques, internal obliques, transversus abdominis.",
      "Compresses the abdomen and braces the trunk; planks and side planks stabilize."
    ]
  },
  {
    b: "Abdominals",
    g: "Posterior Abdominal Wall",
    m: "Quadratus Lumborum",
    o: "Posterior iliac crest",
    i: "Transverse processes of all lumbar vertebrae, last rib",
    a: "Multiarticular",
    f: "Trunk stabilization",
    c: "Plank*, side plank*",
    s: "—",
    r: [
      "Reciprocal inhibition: when quadratus lumborum contracts to laterally flex the trunk, the nervous system relaxes the antagonist (the opposite-side lateral flexors) so it does not resist the movement."
    ],
    n: [
      "Posterior abdominal wall muscle; origin posterior iliac crest, inserts on transverse processes of lumbar vertebrae and the last rib.",
      "Trained by high pulley lateral flexion and side plank."
    ]
  },
  {
    b: "Abdominals",
    g: "Posterior Abdominal Wall",
    m: "Quadratus Lumborum",
    o: "Posterior iliac crest",
    i: "Transverse processes of all lumbar vertebrae, last rib",
    a: "Multiarticular",
    f: "Trunk lateral flexion",
    c: "—",
    s: "High pulley lateral flexion",
    r: [
      "Reciprocal inhibition: when quadratus lumborum contracts to laterally flex the trunk, the nervous system relaxes the antagonist (the opposite-side lateral flexors) so it does not resist the movement."
    ],
    n: [
      "Posterior abdominal wall muscle; origin posterior iliac crest, inserts on transverse processes of lumbar vertebrae and the last rib.",
      "Trained by high pulley lateral flexion and side plank."
    ]
  },
  {
    b: "Abdominals",
    g: "Posterior Abdominal Wall",
    m: "Quadratus Lumborum",
    o: "Posterior iliac crest",
    i: "Transverse processes of all lumbar vertebrae, last rib",
    a: "Multiarticular",
    f: "Trunk extension",
    c: "Deadlift*, good mornings*",
    s: "—",
    r: [
      "Reciprocal inhibition: when quadratus lumborum contracts to laterally flex the trunk, the nervous system relaxes the antagonist (the opposite-side lateral flexors) so it does not resist the movement."
    ],
    n: [
      "Posterior abdominal wall muscle; origin posterior iliac crest, inserts on transverse processes of lumbar vertebrae and the last rib.",
      "Trained by high pulley lateral flexion and side plank."
    ]
  },
  {
    b: "Abdominals",
    g: "Posterior Abdominal Wall (Hip Flexors)",
    m: "Iliacus",
    o: "Iliac fossa of pelvis",
    i: "Lesser trochanter of femur",
    a: "Uniarticular",
    f: "Hip flexion",
    c: "Crunch cum sit up, twisting crunch cum sit up",
    s: "Hanging / lying leg raise*",
    r: [
      "Reciprocal inhibition: when the hip flexors contracts to flex the hip, the nervous system relaxes the antagonist (gluteus maximus and hamstrings) so it does not resist the movement.",
      "Leg raises train hip flexors, not abs."
    ],
    n: [
      "Hip flexor; with psoas major forms the iliopsoas.",
      "Leg raises, hanging or lying, are hip flexion exercises (hip flexors), not abdominal training."
    ]
  },
  {
    b: "Abdominals",
    g: "Posterior Abdominal Wall (Hip Flexors)",
    m: "Psoas Major",
    o: "Transverse processes T12 to L5, lateral aspects of intervertebral discs",
    i: "Lesser trochanter of femur",
    a: "Multiarticular",
    f: "Hip flexion",
    c: "Crunch cum sit up, twisting crunch cum sit up",
    s: "Hanging / lying leg raise*",
    r: [
      "Active insufficiency: psoas major crosses the lumbar vertebral joints and the hip; when shortened at both it loses force.",
      "It is also a stabilizer of the lumbar spine in sit ups and leg raises.",
      "Reciprocal inhibition: when the hip flexors contracts to flex the hip, the nervous system relaxes the antagonist (gluteus maximus and hamstrings) so it does not resist the movement."
    ],
    n: [
      "Hip flexor.",
      "Slides: psoas minor is not a hip flexor; psoas major and iliacus are the hip flexors.",
      "[General] Tight psoas can increase lumbar lordosis and cause low back discomfort."
    ]
  },
  {
    b: "Abdominals",
    g: "Posterior Abdominal Wall",
    m: "Psoas Minor",
    o: "Lateral surface of T12 and L1",
    i: "Iliopubic eminence, pectineal line",
    a: "Multiarticular",
    f: "Weak trunk flexion",
    c: "—",
    s: "—",
    r: [
      "Psoas minor is NOT a hip flexor; it is only a weak trunk flexor (and is absent in many people)."
    ],
    n: [
      "Psoas minor is not a hip flexor, only a weak trunk flexor.",
      "[General] Absent in a large percentage of people."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Biceps Brachii (long head)",
    o: "Supraglenoid tubercle of scapula",
    i: "Radial tuberosity of radius",
    a: "Triarticular",
    f: "Elbow flexion",
    c: "Chin ups, rows, lat pulldowns (assist)",
    s: "Standing DB curl with supination, hammer curls, preacher / cable curls, EZ bar curls, concentration curls",
    r: [
      "Triarticular: biceps crosses the glenohumeral (shoulder), elbow (humeroulnar / humeroradial) and proximal radioulnar joints, so it flexes the shoulder, flexes the elbow and supinates the forearm.",
      "Active insufficiency: with the shoulder flexed and elbow flexed together (e.g. curling with the arm raised in front of the body) it is shortened over its joints and loses force.",
      "Passive insufficiency: shoulder extended with elbow extended and forearm pronated (incline curl start) stretches it over all joints and limits range.",
      "Reciprocal inhibition: when biceps contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement."
    ],
    n: [
      "Slides: add supination to dumbbell curls (standing DB curl with supination) to fully train the biceps.",
      "Elbow flexors: biceps brachii, brachialis, brachioradialis.",
      "[General] Long head tendon passes through the bicipital groove and inserts at the supraglenoid tubercle; it also stabilizes the humeral head."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Biceps Brachii (long head)",
    o: "Supraglenoid tubercle of scapula",
    i: "Radial tuberosity of radius",
    a: "Triarticular",
    f: "Forearm supination",
    c: "—",
    s: "Standing DB curl with supination",
    r: [
      "Triarticular: biceps crosses the glenohumeral (shoulder), elbow (humeroulnar / humeroradial) and proximal radioulnar joints, so it flexes the shoulder, flexes the elbow and supinates the forearm.",
      "Active insufficiency: with the shoulder flexed and elbow flexed together (e.g. curling with the arm raised in front of the body) it is shortened over its joints and loses force.",
      "Passive insufficiency: shoulder extended with elbow extended and forearm pronated (incline curl start) stretches it over all joints and limits range.",
      "Reciprocal inhibition: when biceps contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement."
    ],
    n: [
      "Slides: add supination to dumbbell curls (standing DB curl with supination) to fully train the biceps.",
      "Elbow flexors: biceps brachii, brachialis, brachioradialis.",
      "[General] Long head tendon passes through the bicipital groove and inserts at the supraglenoid tubercle; it also stabilizes the humeral head."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Biceps Brachii (long head)",
    o: "Supraglenoid tubercle of scapula",
    i: "Radial tuberosity of radius",
    a: "Triarticular",
    f: "Shoulder flexion (assists)",
    c: "—",
    s: "Front raise (assist)*",
    r: [
      "Triarticular: biceps crosses the glenohumeral (shoulder), elbow (humeroulnar / humeroradial) and proximal radioulnar joints, so it flexes the shoulder, flexes the elbow and supinates the forearm.",
      "Active insufficiency: with the shoulder flexed and elbow flexed together (e.g. curling with the arm raised in front of the body) it is shortened over its joints and loses force.",
      "Passive insufficiency: shoulder extended with elbow extended and forearm pronated (incline curl start) stretches it over all joints and limits range.",
      "Reciprocal inhibition: when biceps contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement."
    ],
    n: [
      "Slides: add supination to dumbbell curls (standing DB curl with supination) to fully train the biceps.",
      "Elbow flexors: biceps brachii, brachialis, brachioradialis.",
      "[General] Long head tendon passes through the bicipital groove and inserts at the supraglenoid tubercle; it also stabilizes the humeral head."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Biceps Brachii (short head)",
    o: "Coracoid process of scapula",
    i: "Radial tuberosity of radius",
    a: "Triarticular",
    f: "Elbow flexion",
    c: "Chin ups, rows, lat pulldowns (assist)",
    s: "Standing DB curl with supination, hammer curls, preacher / cable curls, EZ bar curls, concentration curls",
    r: [
      "Triarticular: biceps crosses the glenohumeral (shoulder), elbow (humeroulnar / humeroradial) and proximal radioulnar joints, so it flexes the shoulder, flexes the elbow and supinates the forearm.",
      "Active insufficiency: with the shoulder flexed and elbow flexed together (e.g. curling with the arm raised in front of the body) it is shortened over its joints and loses force.",
      "Passive insufficiency: shoulder extended with elbow extended and forearm pronated (incline curl start) stretches it over all joints and limits range.",
      "Reciprocal inhibition: when biceps contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement."
    ],
    n: [
      "Origin is the coracoid process (common with coracobrachialis).",
      "Slides: add supination to dumbbell curls.",
      "Trained by incline / preacher variations; also works in chin ups."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Biceps Brachii (short head)",
    o: "Coracoid process of scapula",
    i: "Radial tuberosity of radius",
    a: "Triarticular",
    f: "Forearm supination",
    c: "—",
    s: "Standing DB curl with supination",
    r: [
      "Triarticular: biceps crosses the glenohumeral (shoulder), elbow (humeroulnar / humeroradial) and proximal radioulnar joints, so it flexes the shoulder, flexes the elbow and supinates the forearm.",
      "Active insufficiency: with the shoulder flexed and elbow flexed together (e.g. curling with the arm raised in front of the body) it is shortened over its joints and loses force.",
      "Passive insufficiency: shoulder extended with elbow extended and forearm pronated (incline curl start) stretches it over all joints and limits range.",
      "Reciprocal inhibition: when biceps contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement."
    ],
    n: [
      "Origin is the coracoid process (common with coracobrachialis).",
      "Slides: add supination to dumbbell curls.",
      "Trained by incline / preacher variations; also works in chin ups."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Biceps Brachii (short head)",
    o: "Coracoid process of scapula",
    i: "Radial tuberosity of radius",
    a: "Triarticular",
    f: "Shoulder flexion (assists)",
    c: "—",
    s: "Front raise (assist)*",
    r: [
      "Triarticular: biceps crosses the glenohumeral (shoulder), elbow (humeroulnar / humeroradial) and proximal radioulnar joints, so it flexes the shoulder, flexes the elbow and supinates the forearm.",
      "Active insufficiency: with the shoulder flexed and elbow flexed together (e.g. curling with the arm raised in front of the body) it is shortened over its joints and loses force.",
      "Passive insufficiency: shoulder extended with elbow extended and forearm pronated (incline curl start) stretches it over all joints and limits range.",
      "Reciprocal inhibition: when biceps contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement."
    ],
    n: [
      "Origin is the coracoid process (common with coracobrachialis).",
      "Slides: add supination to dumbbell curls.",
      "Trained by incline / preacher variations; also works in chin ups."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Brachialis",
    o: "Halfway down anterior surface of humerus",
    i: "Ulnar tuberosity of ulna",
    a: "Uniarticular",
    f: "Elbow flexion",
    c: "Chin ups, rows",
    s: "Reverse curls, hammer curls, standing DB curl",
    r: [
      "Reciprocal inhibition: when brachialis contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement.",
      "Pure elbow flexor ('workhorse'), unaffected by forearm position."
    ],
    n: [
      "Pure elbow flexor; works regardless of forearm rotation.",
      "Reverse curls and hammer curls bring brachialis and brachioradialis into play more than a regular supinated curl.",
      "Slides: elbow flexors are trained by curls."
    ]
  },
  {
    b: "Arms",
    g: "Elbow Flexors",
    m: "Brachioradialis",
    o: "Lateral supracondylar ridge of humerus",
    i: "Styloid process of radius",
    a: "Uniarticular",
    f: "Elbow flexion",
    c: "Chin ups, rows",
    s: "Reverse curls, hammer curls",
    r: [
      "Reciprocal inhibition: when brachioradialis contracts to flex the elbow, the nervous system relaxes the antagonist (triceps) so it does not resist the movement.",
      "Strongest with the forearm neutral (hammer curl) or pronated (reverse curl)."
    ],
    n: [
      "Elbow flexor; [General] strongest with the forearm in neutral.",
      "Reverse curls (preacher or cable) and hammer curls train it.",
      "Origin is the lateral supracondylar ridge."
    ]
  },
  {
    b: "Arms",
    g: "Triceps Brachii (Elbow Extensor)",
    m: "Triceps (long head)",
    o: "Infraglenoid tubercle of scapula",
    i: "Olecranon process of ulna",
    a: "Biarticular",
    f: "Elbow extension",
    c: "Decline close grip bench press, parallel bar dips",
    s: "Cable triceps pushdown, skull crushers, overhead cable extension, French press, kickbacks",
    r: [
      "Active insufficiency: long head of triceps crosses shoulder and elbow.",
      "With the shoulder extended and elbow extended together (end of a kickback) it is shortened over both and weak.",
      "Passive insufficiency: arm overhead with elbow flexed (overhead extension start) stretches it fully.",
      "Reciprocal inhibition: when triceps contracts to extend the elbow, the nervous system relaxes the antagonist (biceps / brachialis) so it does not resist the movement."
    ],
    n: [
      "Only head that crosses the shoulder joint.",
      "Triceps brachii has three heads (long, lateral, medial).",
      "Slides: replace behind-the-back bench dips with parallel bar dips; use decline (-15 degrees) close grip bench press instead of flat."
    ]
  },
  {
    b: "Arms",
    g: "Triceps Brachii (Elbow Extensor)",
    m: "Triceps (long head)",
    o: "Infraglenoid tubercle of scapula",
    i: "Olecranon process of ulna",
    a: "Biarticular",
    f: "Shoulder extension and adduction (weak)",
    c: "—",
    s: "—",
    r: [
      "Active insufficiency: long head of triceps crosses shoulder and elbow.",
      "With the shoulder extended and elbow extended together (end of a kickback) it is shortened over both and weak.",
      "Passive insufficiency: arm overhead with elbow flexed (overhead extension start) stretches it fully.",
      "Reciprocal inhibition: when triceps contracts to extend the elbow, the nervous system relaxes the antagonist (biceps / brachialis) so it does not resist the movement."
    ],
    n: [
      "Only head that crosses the shoulder joint.",
      "Triceps brachii has three heads (long, lateral, medial).",
      "Slides: replace behind-the-back bench dips with parallel bar dips; use decline (-15 degrees) close grip bench press instead of flat."
    ]
  },
  {
    b: "Arms",
    g: "Triceps Brachii (Elbow Extensor)",
    m: "Triceps (lateral head)",
    o: "Posterior shaft of humerus, superior to radial groove",
    i: "Olecranon process of ulna",
    a: "Uniarticular",
    f: "Elbow extension",
    c: "Decline close grip bench press, parallel bar dips",
    s: "Cable triceps pushdown, skull crushers, overhead cable extension, French press, kickbacks",
    r: [
      "Reciprocal inhibition: when triceps (lateral head) contracts to extend the elbow, the nervous system relaxes the antagonist (biceps / brachialis) so it does not resist the movement."
    ],
    n: [
      "Origin posterior humerus above the radial groove.",
      "Slides: close grip bench press should be done on a -15 degree decline bench.",
      "Parallel bar dips and cable triceps pushdown also train triceps."
    ]
  },
  {
    b: "Arms",
    g: "Triceps Brachii (Elbow Extensor)",
    m: "Triceps (medial head)",
    o: "Posterior shaft of humerus, inferior to radial groove",
    i: "Olecranon process of ulna",
    a: "Uniarticular",
    f: "Elbow extension",
    c: "Decline close grip bench press, parallel bar dips",
    s: "Cable triceps pushdown, skull crushers, overhead cable extension, French press, kickbacks",
    r: [
      "Reciprocal inhibition: when triceps (medial head) contracts to extend the elbow, the nervous system relaxes the antagonist (biceps / brachialis) so it does not resist the movement."
    ],
    n: [
      "Origin posterior humerus below the radial groove; sits deep to the other two heads.",
      "Elbow extension only; active in all triceps exercises."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Carpi Radialis",
    o: "Medial epicondyle of humerus",
    i: "Palmar surface of 2nd and 3rd metacarpals",
    a: "Biarticular",
    f: "Wrist flexion",
    c: "Farmer's walk (grip)*",
    s: "Wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "All wrist flexors arise from the medial epicondyle.",
      "Wrist flexion and gripping.",
      "Trained by wrist curls, farmer's walk, pinch holds, gorilla grippers / Captains of Crush, fat grips."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Carpi Radialis",
    o: "Medial epicondyle of humerus",
    i: "Palmar surface of 2nd and 3rd metacarpals",
    a: "Biarticular",
    f: "Gripping",
    c: "Farmer's walk, deadlift (grip)*, pull ups (grip)*",
    s: "Gorilla grippers / Captains of Crush, pinch holds, fat grips, wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "All wrist flexors arise from the medial epicondyle.",
      "Wrist flexion and gripping.",
      "Trained by wrist curls, farmer's walk, pinch holds, gorilla grippers / Captains of Crush, fat grips."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Carpi Ulnaris",
    o: "Medial epicondyle of humerus",
    i: "Carpals, base of 5th metacarpal",
    a: "Biarticular",
    f: "Wrist flexion",
    c: "Farmer's walk (grip)*",
    s: "Wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Inserts on carpals and the base of the 5th metacarpal.",
      "Wrist flexion and gripping.",
      "[General] Also adducts (ulnar deviates) the wrist."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Carpi Ulnaris",
    o: "Medial epicondyle of humerus",
    i: "Carpals, base of 5th metacarpal",
    a: "Biarticular",
    f: "Gripping",
    c: "Farmer's walk, deadlift (grip)*, pull ups (grip)*",
    s: "Gorilla grippers / Captains of Crush, pinch holds, fat grips, wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Inserts on carpals and the base of the 5th metacarpal.",
      "Wrist flexion and gripping.",
      "[General] Also adducts (ulnar deviates) the wrist."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Palmaris Longus",
    o: "Medial epicondyle of humerus",
    i: "Flexor retinaculum, palmar aponeurosis",
    a: "Biarticular",
    f: "Wrist flexion",
    c: "Farmer's walk (grip)*",
    s: "Wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Inserts on the flexor retinaculum and palmar aponeurosis.",
      "[General] Absent in about 15 percent of people on one or both sides."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Palmaris Longus",
    o: "Medial epicondyle of humerus",
    i: "Flexor retinaculum, palmar aponeurosis",
    a: "Biarticular",
    f: "Gripping",
    c: "Farmer's walk, deadlift (grip)*, pull ups (grip)*",
    s: "Gorilla grippers / Captains of Crush, pinch holds, fat grips, wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Inserts on the flexor retinaculum and palmar aponeurosis.",
      "[General] Absent in about 15 percent of people on one or both sides."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Digitorum Superficialis",
    o: "Medial epicondyle of humerus",
    i: "Middle phalanx of digits 2 to 5",
    a: "Multiarticular",
    f: "Wrist flexion",
    c: "Farmer's walk (grip)*",
    s: "Wrist curls",
    r: [
      "Active insufficiency: the finger flexors cross wrist and fingers.",
      "With the wrist flexed, they are shortened at the wrist and cannot close the fist with full strength; grip is strongest with a neutral or slightly extended wrist.",
      "Passive insufficiency: with the wrist extended the long flexors are stretched, limiting finger extension.",
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Inserts on middle phalanx of digits 2 to 5.",
      "Gripping; trained by farmer's walk, pinch holds, grippers, fat grips."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Digitorum Superficialis",
    o: "Medial epicondyle of humerus",
    i: "Middle phalanx of digits 2 to 5",
    a: "Multiarticular",
    f: "Gripping",
    c: "Farmer's walk, deadlift (grip)*, pull ups (grip)*",
    s: "Gorilla grippers / Captains of Crush, pinch holds, fat grips, wrist curls",
    r: [
      "Active insufficiency: the finger flexors cross wrist and fingers.",
      "With the wrist flexed, they are shortened at the wrist and cannot close the fist with full strength; grip is strongest with a neutral or slightly extended wrist.",
      "Passive insufficiency: with the wrist extended the long flexors are stretched, limiting finger extension.",
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Inserts on middle phalanx of digits 2 to 5.",
      "Gripping; trained by farmer's walk, pinch holds, grippers, fat grips."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Digitorum Profundus",
    o: "Proximal part of ulna",
    i: "Distal phalanges of digits 2 to 5",
    a: "Multiarticular",
    f: "Wrist flexion",
    c: "Farmer's walk (grip)*",
    s: "Wrist curls",
    r: [
      "Active insufficiency: the finger flexors cross wrist and fingers.",
      "With the wrist flexed, they are shortened at the wrist and cannot close the fist with full strength; grip is strongest with a neutral or slightly extended wrist.",
      "Passive insufficiency: with the wrist extended the long flexors are stretched, limiting finger extension.",
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Origin proximal ulna; inserts on distal phalanges of digits 2 to 5.",
      "Strongest gripping flexor of the fingers."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Digitorum Profundus",
    o: "Proximal part of ulna",
    i: "Distal phalanges of digits 2 to 5",
    a: "Multiarticular",
    f: "Gripping",
    c: "Farmer's walk, deadlift (grip)*, pull ups (grip)*",
    s: "Gorilla grippers / Captains of Crush, pinch holds, fat grips, wrist curls",
    r: [
      "Active insufficiency: the finger flexors cross wrist and fingers.",
      "With the wrist flexed, they are shortened at the wrist and cannot close the fist with full strength; grip is strongest with a neutral or slightly extended wrist.",
      "Passive insufficiency: with the wrist extended the long flexors are stretched, limiting finger extension.",
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Origin proximal ulna; inserts on distal phalanges of digits 2 to 5.",
      "Strongest gripping flexor of the fingers."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Pollicis Longus",
    o: "Anterior surface of radius and interosseous membrane",
    i: "Palmar surface of distal phalanx of thumb",
    a: "Multiarticular",
    f: "Wrist flexion",
    c: "Farmer's walk (grip)*",
    s: "Wrist curls",
    r: [
      "Active insufficiency: the finger flexors cross wrist and fingers.",
      "With the wrist flexed, they are shortened at the wrist and cannot close the fist with full strength; grip is strongest with a neutral or slightly extended wrist.",
      "Passive insufficiency: with the wrist extended the long flexors are stretched, limiting finger extension.",
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Flexes the thumb; origin anterior radius and interosseous membrane.",
      "Trained by pinch holds and gripper work."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Flexors",
    m: "Flexor Pollicis Longus",
    o: "Anterior surface of radius and interosseous membrane",
    i: "Palmar surface of distal phalanx of thumb",
    a: "Multiarticular",
    f: "Gripping",
    c: "Farmer's walk, deadlift (grip)*, pull ups (grip)*",
    s: "Gorilla grippers / Captains of Crush, pinch holds, fat grips, wrist curls",
    r: [
      "Active insufficiency: the finger flexors cross wrist and fingers.",
      "With the wrist flexed, they are shortened at the wrist and cannot close the fist with full strength; grip is strongest with a neutral or slightly extended wrist.",
      "Passive insufficiency: with the wrist extended the long flexors are stretched, limiting finger extension.",
      "Reciprocal inhibition: when the wrist flexors contracts to flex the wrist, the nervous system relaxes the antagonist (wrist extensors) so it does not resist the movement."
    ],
    n: [
      "Flexes the thumb; origin anterior radius and interosseous membrane.",
      "Trained by pinch holds and gripper work."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Carpi Radialis Brevis",
    o: "Lateral epicondyle of humerus",
    i: "Dorsal surface of 2nd and 3rd metacarpals",
    a: "Biarticular",
    f: "Wrist extension",
    c: "—",
    s: "Reverse wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "All wrist extensors arise from the lateral epicondyle (ECRL from the lateral supracondylar ridge).",
      "Trained by reverse wrist curls.",
      "Extensors work with flexors during gripping to keep the wrist stable."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Carpi Radialis Brevis",
    o: "Lateral epicondyle of humerus",
    i: "Dorsal surface of 2nd and 3rd metacarpals",
    a: "Biarticular",
    f: "Wrist stabilization during gripping",
    c: "Farmer's walk*, pull ups*",
    s: "—",
    r: [
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "All wrist extensors arise from the lateral epicondyle (ECRL from the lateral supracondylar ridge).",
      "Trained by reverse wrist curls.",
      "Extensors work with flexors during gripping to keep the wrist stable."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Carpi Radialis Longus",
    o: "Lateral supracondylar ridge of humerus",
    i: "Dorsal surface of 2nd metacarpal",
    a: "Biarticular",
    f: "Wrist extension",
    c: "—",
    s: "Reverse wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Origin lateral supracondylar ridge; inserts on the 2nd metacarpal.",
      "Wrist extension; reverse wrist curls."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Carpi Radialis Longus",
    o: "Lateral supracondylar ridge of humerus",
    i: "Dorsal surface of 2nd metacarpal",
    a: "Biarticular",
    f: "Wrist stabilization during gripping",
    c: "Farmer's walk*, pull ups*",
    s: "—",
    r: [
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Origin lateral supracondylar ridge; inserts on the 2nd metacarpal.",
      "Wrist extension; reverse wrist curls."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Carpi Ulnaris",
    o: "Lateral epicondyle of humerus",
    i: "5th metacarpal",
    a: "Biarticular",
    f: "Wrist extension",
    c: "—",
    s: "Reverse wrist curls",
    r: [
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Inserts on the 5th metacarpal.",
      "Wrist extension.",
      "[General] Also ulnar deviates the wrist."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Carpi Ulnaris",
    o: "Lateral epicondyle of humerus",
    i: "5th metacarpal",
    a: "Biarticular",
    f: "Wrist stabilization during gripping",
    c: "Farmer's walk*, pull ups*",
    s: "—",
    r: [
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Inserts on the 5th metacarpal.",
      "Wrist extension.",
      "[General] Also ulnar deviates the wrist."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Digitorum",
    o: "Lateral epicondyle of humerus",
    i: "2nd to 5th digits",
    a: "Multiarticular",
    f: "Wrist extension",
    c: "—",
    s: "Reverse wrist curls",
    r: [
      "Active insufficiency: the finger extensors cross wrist and fingers.",
      "With the wrist extended they are shortened at the wrist and cannot fully open the fingers; with the wrist flexed they are stretched, which limits finger flexion (passive insufficiency).",
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Extends digits 2 to 5.",
      "Reverse wrist curls and gripper release phase."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Digitorum",
    o: "Lateral epicondyle of humerus",
    i: "2nd to 5th digits",
    a: "Multiarticular",
    f: "Wrist stabilization during gripping",
    c: "Farmer's walk*, pull ups*",
    s: "—",
    r: [
      "Active insufficiency: the finger extensors cross wrist and fingers.",
      "With the wrist extended they are shortened at the wrist and cannot fully open the fingers; with the wrist flexed they are stretched, which limits finger flexion (passive insufficiency).",
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Extends digits 2 to 5.",
      "Reverse wrist curls and gripper release phase."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Pollicis Longus",
    o: "Posterior surface of middle third of ulna and interosseous membrane",
    i: "Posterior aspect of base of distal phalanx of thumb",
    a: "Multiarticular",
    f: "Wrist extension",
    c: "—",
    s: "Reverse wrist curls",
    r: [
      "Active insufficiency: the finger extensors cross wrist and fingers.",
      "With the wrist extended they are shortened at the wrist and cannot fully open the fingers; with the wrist flexed they are stretched, which limits finger flexion (passive insufficiency).",
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Origin posterior surface of the middle third of the ulna and interosseous membrane; inserts at the base of the distal phalanx of the thumb.",
      "Extends the thumb."
    ]
  },
  {
    b: "Arms",
    g: "Forearm: Wrist Extensors",
    m: "Extensor Pollicis Longus",
    o: "Posterior surface of middle third of ulna and interosseous membrane",
    i: "Posterior aspect of base of distal phalanx of thumb",
    a: "Multiarticular",
    f: "Wrist stabilization during gripping",
    c: "Farmer's walk*, pull ups*",
    s: "—",
    r: [
      "Active insufficiency: the finger extensors cross wrist and fingers.",
      "With the wrist extended they are shortened at the wrist and cannot fully open the fingers; with the wrist flexed they are stretched, which limits finger flexion (passive insufficiency).",
      "Reciprocal inhibition: when the wrist extensors contracts to extend the wrist, the nervous system relaxes the antagonist (wrist flexors) so it does not resist the movement."
    ],
    n: [
      "Origin posterior surface of the middle third of the ulna and interosseous membrane; inserts at the base of the distal phalanx of the thumb.",
      "Extends the thumb."
    ]
  }
];

const IMG = {
  "muscle": {
    "Rectus Femoris": [
      "Leg_03",
      "Leg_04"
    ],
    "Vastus Lateralis": [
      "Leg_03",
      "Leg_04"
    ],
    "Vastus Medialis": [
      "Leg_03",
      "Leg_04"
    ],
    "Vastus Intermedius": [
      "Leg_03",
      "Leg_04"
    ],
    "Biceps Femoris (short head)": [
      "Leg_06"
    ],
    "Biceps Femoris (long head)": [
      "Leg_06"
    ],
    "Semitendinosus": [
      "Leg_06"
    ],
    "Semimembranosus": [
      "Leg_06"
    ],
    "Gluteus Maximus": [
      "Leg_09"
    ],
    "Gluteus Medius": [
      "Leg_10"
    ],
    "Gluteus Minimus": [
      "Leg_10"
    ],
    "Adductor Magnus": [
      "Leg_13",
      "Leg_12"
    ],
    "Adductor Longus": [
      "Leg_13",
      "Leg_12"
    ],
    "Adductor Brevis": [
      "Leg_13",
      "Leg_12"
    ],
    "Sartorius": [
      "Leg_16"
    ],
    "Gastrocnemius": [
      "Leg_27"
    ],
    "Soleus": [
      "Leg_27"
    ],
    "Tibialis Anterior": [
      "Leg_27"
    ],
    "Spinalis": [
      "Bac_12",
      "Bac_09",
      "Bac_11"
    ],
    "Longissimus": [
      "Bac_13",
      "Bac_09",
      "Bac_11"
    ],
    "Iliocostalis": [
      "Bac_14",
      "Bac_09",
      "Bac_11"
    ],
    "Multifidus": [
      "Bac_15"
    ],
    "Upper Trapezius": [
      "Bac_22",
      "Bac_21"
    ],
    "Middle Trapezius": [
      "Bac_22",
      "Bac_21"
    ],
    "Lower Trapezius": [
      "Bac_22",
      "Bac_21"
    ],
    "Levator Scapulae": [
      "Bac_24"
    ],
    "Rhomboid Minor": [
      "Bac_24"
    ],
    "Rhomboid Major": [
      "Bac_24"
    ],
    "Latissimus Dorsi": [
      "Bac_28",
      "Bac_29"
    ],
    "Teres Major": [
      "Bac_28",
      "Bac_29"
    ],
    "Pectoralis Major (clavicular head)": [
      "Che_25",
      "Che_24"
    ],
    "Pectoralis Major (sternocostal head)": [
      "Che_26",
      "Che_24"
    ],
    "Pectoralis Major (abdominal head)": [
      "Che_27",
      "Che_24"
    ],
    "Pectoralis Minor": [
      "Che_28",
      "Che_24"
    ],
    "Supraspinatus": [
      "Che_07",
      "Che_06"
    ],
    "Infraspinatus": [
      "Che_08",
      "Che_06"
    ],
    "Teres Minor": [
      "Che_09",
      "Che_10",
      "Che_06"
    ],
    "Subscapularis": [
      "Che_11",
      "Che_06"
    ],
    "Anterior Deltoid": [
      "Che_15",
      "Che_14"
    ],
    "Middle Deltoid": [
      "Che_16",
      "Che_14"
    ],
    "Posterior Deltoid": [
      "Che_17",
      "Che_14"
    ],
    "Rectus Abdominis": [
      "Abd_04",
      "Abd_05"
    ],
    "External Obliques": [
      "Abd_07",
      "Abd_11"
    ],
    "Internal Obliques": [
      "Abd_09",
      "Abd_11"
    ],
    "Transversus Abdominis": [
      "Abd_12",
      "Abd_14"
    ],
    "Quadratus Lumborum": [
      "Abd_17",
      "Abd_16"
    ],
    "Iliacus": [
      "Abd_19"
    ],
    "Psoas Major": [
      "Abd_19"
    ],
    "Psoas Minor": [
      "Abd_20"
    ],
    "Biceps Brachii (long head)": [
      "Arm_04",
      "Arm_03"
    ],
    "Biceps Brachii (short head)": [
      "Arm_04",
      "Arm_03"
    ],
    "Brachialis": [
      "Arm_05",
      "Arm_03"
    ],
    "Brachioradialis": [
      "Arm_05",
      "Arm_03"
    ],
    "Triceps (long head)": [
      "Arm_07"
    ],
    "Triceps (lateral head)": [
      "Arm_07"
    ],
    "Triceps (medial head)": [
      "Arm_07"
    ],
    "Flexor Carpi Radialis": [
      "Arm_12",
      "Arm_10"
    ],
    "Flexor Carpi Ulnaris": [
      "Arm_12",
      "Arm_10"
    ],
    "Palmaris Longus": [
      "Arm_12",
      "Arm_10"
    ],
    "Flexor Digitorum Superficialis": [
      "Arm_12",
      "Arm_10"
    ],
    "Flexor Digitorum Profundus": [
      "Arm_12",
      "Arm_10"
    ],
    "Flexor Pollicis Longus": [
      "Arm_12",
      "Arm_10"
    ],
    "Extensor Carpi Radialis Brevis": [
      "Arm_15",
      "Arm_10"
    ],
    "Extensor Carpi Radialis Longus": [
      "Arm_15",
      "Arm_10"
    ],
    "Extensor Carpi Ulnaris": [
      "Arm_15",
      "Arm_10"
    ],
    "Extensor Digitorum": [
      "Arm_15",
      "Arm_10"
    ],
    "Extensor Pollicis Longus": [
      "Arm_15",
      "Arm_10"
    ]
  },
  "group": {
    "Quadriceps Femoris": [
      "Leg_03",
      "Leg_04"
    ],
    "Hamstrings": [
      "Leg_06"
    ],
    "Gluteal Group": [
      "Leg_09",
      "Leg_10"
    ],
    "Adductors": [
      "Leg_13",
      "Leg_12"
    ],
    "Sartorius (no group)": [
      "Leg_16"
    ],
    "Lower Leg": [
      "Leg_27"
    ],
    "Erector Spinae": [
      "Bac_09",
      "Bac_11",
      "Bac_12",
      "Bac_13",
      "Bac_14"
    ],
    "Deep Back": [
      "Bac_15"
    ],
    "Trapezius": [
      "Bac_21",
      "Bac_22"
    ],
    "Levator Scapulae and Rhomboids": [
      "Bac_24"
    ],
    "Lats and Teres Major": [
      "Bac_28",
      "Bac_29"
    ],
    "Pectorals": [
      "Che_24"
    ],
    "Rotator Cuff (SITS)": [
      "Che_06",
      "Che_10"
    ],
    "Deltoids": [
      "Che_14"
    ],
    "Abdominal Group": [
      "Abd_14",
      "Abd_11"
    ],
    "Posterior Abdominal Wall": [
      "Abd_16",
      "Abd_17"
    ],
    "Posterior Abdominal Wall (Hip Flexors)": [
      "Abd_19"
    ],
    "Elbow Flexors": [
      "Arm_03"
    ],
    "Triceps Brachii (Elbow Extensor)": [
      "Arm_07"
    ],
    "Forearm: Wrist Flexors": [
      "Arm_12"
    ],
    "Forearm: Wrist Extensors": [
      "Arm_15"
    ]
  },
  "cap": {
    "Leg_10": "Slide 9: Gluteus medius and minimus: lateral hip stabilizers",
    "Che_17": "Slide 16: Posterior deltoid",
    "Arm_04": "Slide 3: Biceps brachii: long and short heads",
    "Abd_12": "Slide 11: Transversus abdominis",
    "Arm_07": "Slide 6: Triceps brachii: long, lateral, medial heads",
    "Arm_05": "Slide 4: Brachialis and brachioradialis",
    "Abd_17": "Slide 16: Quadratus lumborum",
    "Arm_15": "Slide 14: Wrist extensors",
    "Bac_14": "Slide 13: Iliocostalis segments",
    "Che_11": "Slide 10: Subscapularis",
    "Abd_14": "Slide 13: Abdominal muscle layers",
    "Bac_11": "Slide 10: Segmentation of Erector spinae",
    "Leg_03": "Slide 2: Quadriceps femoris: rectus femoris, vastus lateralis, medialis, intermedius",
    "Bac_24": "Slide 23: Levator scapulae and rhomboids",
    "Che_08": "Slide 7: Infraspinatus",
    "Bac_15": "Slide 14: Multifidus",
    "Bac_13": "Slide 12: Longissimus segments",
    "Che_07": "Slide 6: Supraspinatus",
    "Arm_10": "Slide 9: Forearm: wrist flexors and extensors",
    "Che_06": "Slide 5: Rotator cuff muscles",
    "Che_24": "Slide 23: Pectoralis major and minor",
    "Bac_22": "Slide 21: Trapezius: upper, middle and lower fibres",
    "Arm_03": "Slide 2: Elbow flexors: biceps brachii, brachialis, brachioradialis",
    "Leg_04": "Slide 3: Quadriceps insertion via patellar ligament",
    "Che_14": "Slide 13: Deltoids: anterior, middle, posterior",
    "Abd_19": "Slide 18: Hip flexors: iliacus and psoas major",
    "Abd_07": "Slide 6: External obliques",
    "Abd_20": "Slide 19: Psoas minor (not a hip flexor)",
    "Abd_11": "Slide 10: External vs internal obliques",
    "Leg_27": "Slide 26: Gastrocnemius, soleus, tibialis anterior",
    "Che_10": "Slide 9: Teres major vs teres minor",
    "Abd_05": "Slide 4: Linea alba and tendinous intersections",
    "Che_26": "Slide 25: Pectoralis major: sternocostal head",
    "Che_15": "Slide 14: Anterior deltoid",
    "Che_16": "Slide 15: Middle deltoid",
    "Leg_13": "Slide 12: Adductors: brevis, longus, magnus",
    "Abd_09": "Slide 8: Internal obliques",
    "Che_25": "Slide 24: Pectoralis major: clavicular head",
    "Bac_28": "Slide 27: Latissimus dorsi and teres major",
    "Che_27": "Slide 26: Pectoralis major: abdominal head",
    "Bac_29": "Slide 28: Latissimus dorsi and teres major: insertion",
    "Leg_12": "Slide 11: Adductors, side by side views",
    "Bac_21": "Slide 20: Trapezius, the diamond shaped muscle",
    "Che_28": "Slide 27: Pectoralis minor",
    "Abd_04": "Slide 3: Rectus abdominis",
    "Abd_16": "Slide 15: Posterior abdominal wall",
    "Che_09": "Slide 8: Teres minor",
    "Leg_09": "Slide 8: Gluteus maximus",
    "Leg_06": "Slide 5: Hamstrings: biceps femoris, semitendinosus, semimembranosus",
    "Bac_09": "Slide 8: Erector spinae: spinalis, longissimus, iliocostalis",
    "Arm_12": "Slide 11: Wrist flexors",
    "Leg_16": "Slide 15: Sartorius, the longest muscle",
    "Bac_12": "Slide 11: Spinalis segments"
  }
};
