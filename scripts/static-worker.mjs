export default {
  async fetch(request, environment) {
    if (!environment.ASSETS) {
      return new Response('Static asset binding is unavailable.', {
        status: 503,
      });
    }

    return environment.ASSETS.fetch(request);
  },
};
