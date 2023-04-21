export const findTag = async (tag: string) => {
  try {
    const response = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/tags?search=${tag}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Api-Token": `${process.env.ACTIVE_CAMPAIGN_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    if (data.tags) {
      return data.tags[0];
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

export const addTagToContact = async (contactId: string, tagId: string) => {
  try {
    const response = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactTags`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Token": `${process.env.ACTIVE_CAMPAIGN_API_KEY}`,
        },
        body: JSON.stringify({
          contactTag: {
            contact: contactId,
            tag: tagId,
          },
        }),
      }
    );
    const data = await response.json();
    console.log("Tag adicionada: ", data);
    if (data.errors) {
      data.errors.forEach((error: any) => {
        console.error(`- title: ${error.title}`);
      });
    }
    if (data.contactTag) {
      return data.contactTag;
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

const findContact = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts?email=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Api-Token": `${process.env.ACTIVE_CAMPAIGN_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    if (data.contacts) {
      return data.contacts[0];
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

export const createContact = async (
  name: string,
  email: string,
  phone: string
) => {
  try {
    const firstName = name.split(" ")[0];
    const lastName = name.slice(name.indexOf(" ") + 1);
    const response = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Token": `${process.env.ACTIVE_CAMPAIGN_API_KEY}`,
        },
        body: JSON.stringify({
          contact: {
            firstName,
            lastName:
              lastName && lastName !== "" && lastName !== firstName
                ? lastName
                : null,
            email: email,
            phone: phone,
          },
        }),
      }
    );
    const data = await response.json();
    if (data.contact) {
      return data.contact;
    }
    if (data.errors) {
      data.errors.forEach((error: any) => {
        console.error(`- title: ${error.title}`);
      });

      if (data.errors[0].code === "duplicate") {
        const contact = await findContact(email);
        if (contact) {
          return contact;
        }
      }
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};
