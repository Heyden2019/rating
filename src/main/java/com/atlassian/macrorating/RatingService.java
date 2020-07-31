package com.atlassian.macrorating;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class RatingService {

    private RatingHandler ratingHandler;

    public RatingService(RatingHandler ratingHandler) {
        this.ratingHandler = ratingHandler;
    }

    @GET
    @Path("ratingdata/{pageId}")
    public Response getPageRatings(@PathParam("pageId") int pageId) {
        return Response.ok(ratingHandler.findByPageId(pageId)).build();
    }

    @POST
    @Path("ratingdata/{pageId}/{userKey}/{rating}")
    public Response setPageRating(
            @PathParam("pageId") int pageId,
            @PathParam("userKey") String userKey,
            @PathParam("rating") int rating
    ) {
        if (ratingHandler.hasRatingCreated(pageId, userKey, rating)) {
            return Response.ok().build();
        } else {
            return Response.status(500).build();
        }
    }

    @PUT
    @Path("ratingdata/{pageId}/{userKey}/{rating}")
    public Response updatePageRating(
            @PathParam("pageId") int pageId,
            @PathParam("userKey") String userKey,
            @PathParam("rating") int rating
    ) {
        if (ratingHandler.hasRatingUpdated(pageId, userKey, rating)) {
            return Response.ok().build();
        } else {
            return Response.status(500).build();
        }
    }
}
