export const GET_PUBLICATION_URL = `
  query GetPublicationURL($url: String!) {
    PublicationURL(url: $url) {
      source
      registrationNumber
      companyName
      capital
      subject
      headquarters
      partner
      manager
      signedDate
      rawText
    }
  }
`;
