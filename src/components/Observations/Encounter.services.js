export default class EncounterService {
  static postEncounter(weight, uuid) {
    return new Promise((resolve, reject) => {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      let uri = "/openmrs/ws/rest/v1/encounter";
      //let url = 'https://cors-anywhere.herokuapp.com/'+uri;

      let encoded = window.btoa("superman:Admin123");
      let auth = "Basic " + encoded;

      let h = new Headers();
      h.append("Accept", "application/json");
      h.append("Content-Type", "application/json");
      h.append("Authorization", auth);
      let req = new Request(uri, {
        method: "POST",
        headers: h,
        body: JSON.stringify({
          encounterDatetime: currentDate,
          patient: uuid.toString(),
          encounterType: "81852aee-3f10-11e4-adec-0800271c1b75",
          location: "baf7bd38-d225-11e4-9c67-080027b662ec",
          encounterProviders: [
            {
              provider: "c1c26908-3f10-11e4-adec-0800271c1b75",
              encounterRole: "a0b03050-c99b-11e0-9572-0800200c9a66",
            },
          ],
          obs: [
            {
              concept: "efb61428-018b-4114-b0e4-9ee7c35ecb5d",
              groupMembers: [
                {
                  concept: "5089AAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                  value: parseInt(weight),
                },
              ],
            },
          ],
        }),
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });

      fetch(req)
        .then((response) => {
          console.log("from service:" + response);
          return response.json();
        })
        .then((response) => {
          console.log("from resolving:" + response);
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  }

  static postVisit(patient_id, encounter_id,encounter_date) {
    return new Promise((resolve, reject) => {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      let uri = "/openmrs/ws/rest/v1/visit";
      //let url = 'https://cors-anywhere.herokuapp.com/'+uri;

      let encoded = window.btoa("superman:Admin123");
      let auth = "Basic " + encoded;

      let h = new Headers();
      h.append("Accept", "application/json");
      h.append("Content-Type", "application/json");
      h.append("Authorization", auth);

      let req = new Request(uri, {
        method: "POST",
        headers: h,
        body: JSON.stringify({
          patient: patient_id,
          visitType: "6b88a89b-4f85-44e5-b791-ae744b6f3954",
          startDatetime: encounter_date,
          location: "baf7bd38-d225-11e4-9c67-080027b662ec",
          stopDatetime: encounter_date,
          indication: null,
          encounters: [encounter_id],
        }),
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });

      fetch(req)
        .then((response) => {
          console.log("from service:" + response);
          return response.json();
        })
        .then((response) => {
          console.log("from resolving:" + response);
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  }
}
