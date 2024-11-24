import Image from "next/image";
const Movement = async () => {
  let res = await fetch("http://localhost:3000/workout/api");
  let data = await res.json();
  const dosCuisses = data ? data[0] : [];
  const dosCuissesHeader = data
    ? [...new Set(data[1].map((item) => item.bodyPart))].join(" et ")
    : [];
  const poitrineEpaule = data ? data[1] : [];
  const poitrineEpauleHeader = data
    ? [...new Set(data[1].map((item) => item.bodyPart))].join(" et ")
    : [];
  const cuisses = data ? data[2] : [];
  const cuissesHeader = data
    ? [...new Set(data[2].map((item) => item.bodyPart))].join(" et ")
    : [];
  const biceps = data ? data[3] : [];
  const bicepsheader = data
    ? [...new Set(data[3].map((item) => item.bodyPart))].join(" et ")
    : [];

  return (
    <>
      <div style={{ marginBottom: "70px" }}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "300",
            textDecoration: "underLine",
          }}
        >
          {dosCuissesHeader}
        </h2>
        {dosCuisses?.map((work) => {
          const {
            equipment,
            gifUrl,
            id,
            name,
            target,
            secondaryMuscles,
            instructions,
          } = work;
          return (
            <div key={id} className="classCardio">
              <div className="cardioArticle">
                <h3 style={{ fontWeight: "400" }}>
                  Nom :<span style={{ color: "#ffd9b4" }}> {name}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Cible :<span style={{ color: "#ffd9b4" }}> {target}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Muscles Secondaires :
                  <span style={{ color: "#ffd9b4" }}> {secondaryMuscles}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  équipement :
                  <span style={{ color: "#ffd9b4" }}> {equipment}</span>
                </h3>
                <p style={{ fontWeight: "400" }}>
                  Instructions :<span> {instructions}</span>
                </p>
              </div>

              <Image src={gifUrl} alt={name} width={500} height={500} />
            </div>
          );
        })}
      </div>
      <div style={{ marginBottom: "70px" }}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "300",
            textDecoration: "underLine",
          }}
        >
          {poitrineEpauleHeader}
        </h2>
        {poitrineEpaule?.map((work) => {
          const {
            equipment,
            gifUrl,
            id,
            name,
            target,
            secondaryMuscles,
            instructions,
          } = work;
          return (
            <div key={id} className="classCardio">
              <div className="cardioArticle">
                <h3 style={{ fontWeight: "400" }}>
                  Nom :<span style={{ color: "#ffd9b4" }}> {name}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Cible :<span style={{ color: "#ffd9b4" }}> {target}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Muscles Secondaires :
                  <span style={{ color: "#ffd9b4" }}> {secondaryMuscles}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  équipement :
                  <span style={{ color: "#ffd9b4" }}> {equipment}</span>
                </h3>
                <p style={{ fontWeight: "400" }}>
                  Instructions :<span> {instructions}</span>
                </p>
              </div>

              <Image src={gifUrl} alt={name} width={500} height={500} />
            </div>
          );
        })}
      </div>
      <div style={{ marginBottom: "70px" }}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "300",
            textDecoration: "underLine",
          }}
        >
          {cuissesHeader}
        </h2>
        {cuisses?.map((work) => {
          const {
            equipment,
            gifUrl,
            id,
            name,
            target,
            secondaryMuscles,
            instructions,
          } = work;
          return (
            <div key={id} className="classCardio">
              <div className="cardioArticle">
                <h3 style={{ fontWeight: "400" }}>
                  Nom :<span style={{ color: "#ffd9b4" }}> {name}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Cible :<span style={{ color: "#ffd9b4" }}> {target}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Muscles Secondaires :
                  <span style={{ color: "#ffd9b4" }}> {secondaryMuscles}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  équipement :
                  <span style={{ color: "#ffd9b4" }}> {equipment}</span>
                </h3>
                <p style={{ fontWeight: "400" }}>
                  Instructions :<span> {instructions}</span>
                </p>
              </div>

              <Image src={gifUrl} alt={name} width={500} height={500} />
            </div>
          );
        })}
      </div>
      <div style={{ marginBottom: "70px" }}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "300",
            textDecoration: "underLine",
          }}
        >
          {bicepsheader}
        </h2>
        {biceps?.map((work) => {
          const {
            equipment,
            gifUrl,
            id,
            name,
            target,
            secondaryMuscles,
            instructions,
          } = work;
          return (
            <div key={id} className="classCardio">
              <div className="cardioArticle">
                <h3 style={{ fontWeight: "400" }}>
                  Nom :<span style={{ color: "#ffd9b4" }}> {name}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Cible :<span style={{ color: "#ffd9b4" }}> {target}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  Muscles Secondaires :
                  <span style={{ color: "#ffd9b4" }}> {secondaryMuscles}</span>
                </h3>
                <h3 style={{ fontWeight: "400" }}>
                  équipement :
                  <span style={{ color: "#ffd9b4" }}> {equipment}</span>
                </h3>
                <p style={{ fontWeight: "400" }}>
                  Instructions :<span> {instructions}</span>
                </p>
              </div>

              <Image src={gifUrl} alt={name} width={500} height={500} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movement;
