class GamesController < ApplicationController
  def index
    @games = current_user.games.all
  end

  def show
    @game = Game.find(params[:id])
  end

  def create
    board = Array.new(9)
    game = Game.create({:user_id => session[:user_id], :board => @board})
    redirect_to(game_path(game.id))
  end

  def update
    game = Game.find(params[:id])
    game.update_attributes(params[:game])
    redirect_to(games_path)
  end

  def destroy
    game = Game.find(params[:id])
    game.delete
  end
end
