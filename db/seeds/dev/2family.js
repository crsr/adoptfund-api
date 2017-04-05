exports.seed = function(knex, Promise) {
  return knex('family').del()
  .then(() => {
    return Promise.all([
      knex('family').insert({
        userId: 1,
        location: 'Denver1',
        expiration: new Date(),
        title: 'title1',
        story: 'story1',
        links: 'link1',
        image: 'image1',
        expenseDescription: 'description1',
        cost: 'cost1',
      }),
      knex('family').insert({
        userId: 2,
        location: 'Denver2',
        expiration: new Date(),
        title: 'title2',
        story: 'story2',
        links: 'link2',
        image: 'image2',
        expenseDescription: 'description2',
        cost: 'cost2',
      })
    ]);
  });
};
