function newNendoroidSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.nendoroid({ mutation_in: ['CREATED'] }).node()
  }
  
  const newNendoroid = {
    subscribe: newNendoroidSubscribe,
    resolve: payload => {
      return payload
    },
  }

  function newInteractionSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.interaction({ mutation_in: ['CREATED'] }).node()
  }
  
  const newInteraction = {
    subscribe: newInteractionSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    newNendoroid,
    newInteraction
  }