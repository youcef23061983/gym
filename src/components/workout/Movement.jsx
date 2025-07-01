import Image from "next/image";
import { BASE_API_URL } from "@/utils/Url";
async function getData() {
  const response = await fetch(`${BASE_API_URL}/workout/api`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
const Movement = async () => {
  if (!BASE_API_URL) {
    return null;
  }

  const data = await getData();
  const dos = data ? data.filter((item) => item.includes("dos")) : [];

  const poitrineEpaule = data
    ? data.filter(
        (item) => item.includes("Poitrine") || item.includes("Épaules")
      )
    : [];

  const cuisses = data
    ? data.filter(
        (item) => item.includes("Cuisses") || item.includes("Mollets")
      )
    : [];

  const biceps = data
    ? data.filter(
        (item) =>
          item.includes("Biceps") ||
          item.includes("trapezes") ||
          item.includes("avant-bras")
      )
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
          Dos
        </h2>
        {dos?.map((work) => {
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
          Poitrine et Épaules
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
          Cuisses et Mollets
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
          Biceps et Trapezes et Avant-bras
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
