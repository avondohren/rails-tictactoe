class GamesController < ApplicationController
  def index
    authorize
    @games = current_user.games.all
  end

  def show
    authorize
    @game = Game.find(params[:id])
  end

  def create
    authorize
    game = Game.create({:user_id => session[:user_id]})
    redirect_to(game_path(game.id))
  end

  def update
    authorize
    game = Game.find(params[:id])
    game.update_attributes(params[:game])
    redirect_to(games_path)
  end

  def destroy
    authorize
    game = Game.find(params[:id])
    game.delete
  end
end
