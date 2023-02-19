// export async function navQuery() {
//   const siteNavQueryRes = await fetch(import.meta.env.WP_URL, {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `{
//                 menus(where: {location: PRIMARY}) {
//                   nodes {
//                     name
//                     menuItems {
//                         nodes {
//                             uri
//                             url
//                             order
//                             label
//                         }
//                     }
//                   }
//                 }
//                 generalSettings {
//                     title
//                     url
//                     description
//                 }
//             }
//             `,
//     }),
//   });
//   const { data } = await siteNavQueryRes.json();
//   return data;
// }

export async function homePagePostsQuery() {
  const response = await fetch(import.meta.env.WP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
                posts {
                  nodes {
                    date
                    uri
                    title
                    commentCount
                    excerpt
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                  }
                }
              }
            `,
    }),
  });
  const { data } = await response.json();
  return data;
}
