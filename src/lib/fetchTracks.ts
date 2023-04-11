import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQCrQ81fmcblSp5nnupxibQzG-Nx0oRTwoskm2MYwfvWIl6clAFi9Oe493kYegiHnx3OSXjmMwF8Qs_FZQ5HsfdPXlmdqlF013MBAAQ4JrvEzjKeDc5-G4mTTUiWLHQ-8c9sCAl6znJYCoBxBWg8fm0VYl2VDJxMNwldtuiPQxZT1Pov-xGGbrR6EsvtHFfuOAwfG8NC5CTNJh6laNIEhqVHUofwe_atOy3BVBHTAa1LGcOYwn5rU24_CgJCjYTAwMy4e3Ed6peEsI2tIBx56ciSnSKYz85f5zXlHn9u0jJuHOc3wBCHc1YrMCMDHBDrWEWgSt7ITWoBGlinHz-rqGfSIMaw2Q';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
